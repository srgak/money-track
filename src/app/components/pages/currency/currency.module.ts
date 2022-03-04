import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyRoutingModule } from './currency-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { CurrencyComponent } from './currency.component';
import { FormCurrencyComponent } from '../../form-currency/form-currency.component';



@NgModule({
  declarations: [
    CurrencyComponent,
    FormCurrencyComponent
  ],
  imports: [
    CommonModule,
    CurrencyRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CurrencyModule { }
