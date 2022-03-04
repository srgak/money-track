import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data/data.service';
import { Wallet, WalletOperation } from 'src/app/data/interfaces';

@Component({
  selector: 'app-form-wallet',
  templateUrl: './form-wallet.component.html',
  styleUrls: ['./form-wallet.component.less']
})
export class FormWalletComponent implements OnInit {

  constructor(public data: DataService, private router: Router, private currRoute: ActivatedRoute) { }

  public walletForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    currency: new FormControl('', Validators.required)
  });

  public isChange: boolean = false;
  private id: number;

  public addWallet(): void {
    if(this.walletForm.valid) {
      //подготовить данные
      const wallet: Wallet = {...this.walletForm.value};
      wallet.price = +wallet.price;
      wallet.img = this.data.moneBoxList.filter(item => item.value === this.walletForm.value.type)[0].imgLink;
      wallet.operationList = this.isChange ? this.data.walletList[this.id].operationList : [];
      //изменить данные
      if(!this.isChange) {
        this.data.walletList.push(wallet);
      } else {
        this.data.walletList.splice(this.id, 1, wallet);
      }
      //обновить хранилище, сбросить форму, вернуться обратно
      this.data.setLocStore();
      this.walletForm.reset();
      this.router.navigate(['/wallets']);
    }
  }

  ngOnInit(): void {
    //записать текущий счёт
    this.id = this.currRoute.snapshot.queryParams['id'];
    const walletData: Wallet = this.data.walletList[this.id];
    //пробросить данные
    if (walletData) {
      this.walletForm.setValue({
        name: walletData.name,
        price: walletData.price,
        type: walletData.type,
        currency: walletData.currency
      });
      this.isChange = true;
    }
  }

}
