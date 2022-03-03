import { Component, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/data/data.service';
import { WalletOperation } from 'src/app/data/interfaces';
import { differenceInCalendarDays } from 'date-fns';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-operation',
  templateUrl: './form-operation.component.html',
  styleUrls: ['./form-operation.component.less']
})
export class FormOperationComponent implements OnInit {

  constructor(public data: DataService, private router: Router, private currRoute: ActivatedRoute) { }

  public operationForm: FormGroup = new FormGroup({
    type: new FormControl('finance', Validators.required),
    price: new FormControl('', Validators.required),
    comment: new FormControl(''),
    date: new FormControl('', Validators.required)
  });

  public disableNextDate(current: Date): boolean {
    return differenceInCalendarDays(current, new Date()) > 0;
  }
  public addOperation(): void {
    if(this.operationForm.valid) {
      //подготовить данные
      const operation: WalletOperation = {...this.operationForm.value};
      operation.price = +operation.price;
      //изменить данные
      switch(operation.type) {
        case 'finance':
          this.data.currentWallet.price += operation.price;
          break;
        case 'spending':
          this.data.currentWallet.price -= operation.price;
          break;
        default:
          break;
      }
      this.data.walletList[this.data.currentWallet.id].operationList?.push(operation);
      //обновить хранилище, сбросить форму, вернуться обратно
      this.data.setLocStore();
      this.operationForm.reset();
      this.operationForm.get('type')?.setValue('finance');
      this.operationForm.get('date')?.setValue(new Date());
      this.router.navigate(['/wallets/' + this.data.currentWallet.id]);
    }
  }

  ngOnInit(): void {
    //записать текущую операцию
    const id : number = this.currRoute.snapshot.queryParams['id'];
    const operationData: WalletOperation = this.data.currentWallet.operationList[id];
    //пробросить данные при необходимости
    if(operationData) {
      this.operationForm.setValue({
        type: operationData.type,
        price: operationData.price,
        comment: operationData.comment,
        date: operationData.date
      });
    }
  }
}
