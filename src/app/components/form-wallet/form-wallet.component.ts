import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data/data.service';
import { Wallet } from 'src/app/data/interfaces';

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

  public addWallet(): void {
    if(this.walletForm.valid) {
      // const wallet: Wallet = {
      //   id: this.data.walletList.length,
      //   img: this.data.moneBoxList.filter(item => item.value === this.walletForm.value.type)[0].imgLink,
      //   type: this.walletForm.value.type,
      //   name: this.walletForm.value.name,
      //   price: +this.walletForm.value.startPrice,
      //   currency: this.walletForm.value.currency,
      //   operationList: []
      // };
      const wallet: Wallet = {...this.walletForm.value};
      wallet.price = +wallet.price;
      wallet.id = this.data.walletList.length;
      wallet.img = this.data.moneBoxList.filter(item => item.value === this.walletForm.value.type)[0].imgLink;
      wallet.operationList = [];
      this.data.walletList.push(wallet);
      this.data.setLocStore();
      this.walletForm.reset();
      this.router.navigate(['/wallets']);
    }
  }

  ngOnInit(): void {
    const id: number = this.currRoute.snapshot.queryParams['id'];
    const walletData: Wallet = this.data.walletList[id];
    if (walletData) {
      this.walletForm.setValue({
        name: walletData.name,
        startPrice: walletData.price,
        type: walletData.type,
        currency: walletData.currency
      });
    }
  }

}
