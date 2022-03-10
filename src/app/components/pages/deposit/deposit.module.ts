import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositComponent } from './deposit.component';
import { DepositRoutingModule } from './deposit-routing.module';
import { FormDepositComponent } from '../../form-deposit/form-deposit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [
    DepositComponent,
    FormDepositComponent
  ],
  imports: [
    CommonModule,
    DepositRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DepositModule { }
