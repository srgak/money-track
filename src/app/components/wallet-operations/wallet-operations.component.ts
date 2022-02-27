import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data/data.service';
import { WalletOperation } from '../../data/interfaces';

@Component({
  selector: 'app-wallet-operations',
  templateUrl: './wallet-operations.component.html',
  styleUrls: ['./wallet-operations.component.less']
})
export class WalletOperationsComponent implements OnInit {

  constructor(public data: DataService, private currentRoute: ActivatedRoute, private router: Router) { }

  public removeOperation(index: number): void {
    const currentOperation: WalletOperation = this.data.currentWallet.operationList[index];
    switch(currentOperation.type) {
      case 'finance':
        this.data.currentWallet.price -= currentOperation.price;
        break;
      case 'spending':
        this.data.currentWallet.price += currentOperation.price;
        break;
    }
    this.data.currentWallet.operationList.splice(index, 1);
  }

  ngOnInit(): void {
    this.currentRoute.params.subscribe(val => {
      this.data.currentWallet = this.data.walletList[+val['id']];
    });
    console.log(this.data);
  }

}
