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
  public isChange: boolean = false;

  public disableNextDate(current: Date): boolean {
    return differenceInCalendarDays(current, new Date()) > 0;
  }
  public addOperation(): void {
    if(this.operationForm.valid) {
      //подготовить данные
      const operation: WalletOperation = {...this.operationForm.value};
      operation.price = +operation.price;
      operation.price = operation.type === 'finance' ? operation.price : operation.price * -1;
      //изменить данные
      this.data.walletList[this.data.currentWallet.id].operationList.push(operation);
      this.data.currentWallet.price += operation.price;
      //обновить хранилище, сбросить форму, вернуться обратно
      this.data.setLocStore();
      this.operationForm.reset();
      this.operationForm.get('type')?.setValue('finance');
      this.operationForm.get('date')?.setValue(new Date());
      this.router.navigate(['/wallets/' + this.data.currentWallet.id]);
    } else {
      this.operationForm.markAllAsTouched();
    }
  }

  ngOnInit(): void {

  }
}
