import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WalletOperationsComponent } from './components/wallet-operations/wallet-operations.component';
import { FormOperationComponent } from './components/form-operation/form-operation.component';
import { FormWalletComponent } from './components/form-wallet/form-wallet.component';
import { HasOperationsGuard } from './guards/has-operations.guard';
import { WalletsComponent } from './components/wallets/wallets.component';
import { IsLoggedGuard } from './guards/is-logged.guard';
import { LoginComponent } from './components/login/login.component';
import { FormCurrencyComponent } from './components/form-currency/form-currency.component';

const routes: Routes = [
  { path: 'wallets', component: WalletsComponent, canActivate: [IsLoggedGuard], children: [
    { path: 'form', component: FormWalletComponent, pathMatch: 'full' }
  ]},
  { path: 'wallets/:id', component: WalletOperationsComponent, canActivate: [HasOperationsGuard], 
    children:[
      { path: 'form', component: FormOperationComponent, pathMatch: 'full' }
    ]
  },
  { path: 'currency', component: FormCurrencyComponent },
  {
    path: '', component: LoginComponent, pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
