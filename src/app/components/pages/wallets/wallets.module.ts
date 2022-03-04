import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletsComponent } from './wallets.component';
import { FormWalletComponent } from '../../form-wallet/form-wallet.component';
import { WalletOperationsComponent } from '../../wallet-operations/wallet-operations.component';
import { FormOperationComponent } from '../../form-operation/form-operation.component';
import { WalletsRoutingModule } from './wallets-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [
    WalletsComponent,
    FormWalletComponent,
    WalletOperationsComponent,
    FormOperationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WalletsRoutingModule,
    SharedModule
  ]
})
export class WalletsModule { }
