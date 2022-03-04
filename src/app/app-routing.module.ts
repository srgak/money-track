import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedGuard } from './guards/is-logged.guard';
import { LoginComponent } from './components/login/login.component';
import { FormCurrencyComponent } from './components/form-currency/form-currency.component';
import { AccountComponent } from './components/pages/account/account.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent, pathMatch: 'full'
  },
  {
    path: 'account',
    pathMatch: 'full',
    loadChildren: () => import('./components/pages/account/account.module').then(m => m.AccountModule),
    canLoad: [IsLoggedGuard]
  },
  {
    path: 'wallets',
    pathMatch: 'full',
    loadChildren: () => import('./components/pages/wallets/wallets.module').then(m => m.WalletsModule),
    canLoad: [IsLoggedGuard]
  },
  {
    path: 'currency',
    pathMatch: 'full',
    loadChildren: () => import('./components/pages/currency/currency.module').then(m => m.CurrencyModule),
    canLoad: [IsLoggedGuard]
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
