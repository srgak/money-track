import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data/data.service';
import { Wallet } from 'src/app/data/interfaces';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.less']
})
export class WalletsComponent implements OnInit {

  constructor(public data: DataService) { }

  public removeWallet(index: number): void {
    this.data.walletList.splice(index, 1);
    this.data.setLocStore();
  }

  ngOnInit(): void {
    if(!this.data.walletList.length) {
      this.data.walletList = JSON.parse(localStorage.getItem('walletList') || JSON.stringify([]));
    }
  }

}
