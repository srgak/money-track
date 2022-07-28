import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RiseInputModule } from 'dist/rise-input';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NgxMaskModule } from 'ngx-mask';
import { SmsCodeComponent } from './sms-code.component';



@NgModule({
  declarations: [
    SmsCodeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NgxMaskModule.forRoot(),
    RiseInputModule
  ],
  exports: [
    SmsCodeComponent
  ]
})
export class SmsCodeModule { }
