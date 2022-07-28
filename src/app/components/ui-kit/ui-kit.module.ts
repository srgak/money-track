import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';



@NgModule({
  declarations: [
    DatePickerComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzDatePickerModule,
    NzSelectModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    DatePickerComponent,
  ]
})
export class UiKitModule { }
