import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalletsComponent } from './wallets.component';
import { FormWalletComponent } from '../../form-wallet/form-wallet.component';
import { WalletOperationsComponent } from '../../wallet-operations/wallet-operations.component';
import { FormOperationComponent } from '../../form-operation/form-operation.component';
import { HasOperationsGuard } from 'src/app/guards/has-operations.guard';

const routes: Routes = [
  { 
    path: '', 
    children: [
      { 
        path: '', 
        component: WalletsComponent 
      },
      {
        path: 'wallets/form', 
        component: FormWalletComponent
      },
      {
        path: 'wallets/:id',
        component: WalletOperationsComponent, 
        canActivate: [HasOperationsGuard], 
        children: [
          { 
            path: 'form', 
            component: FormOperationComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class WalletsRoutingModule { }
