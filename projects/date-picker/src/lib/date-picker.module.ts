import { NgModule } from '@angular/core';
import { DatePickerComponent } from './date-picker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NZ_I18N, ru_RU } from 'ng-zorro-antd/i18n';
import ru from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';
import { RiseInputModule } from 'dist/rise-input';

registerLocaleData(ru)

@NgModule({
  declarations: [
    DatePickerComponent
  ],
  imports: [
    ReactiveFormsModule,
    NzDatePickerModule,
    RiseInputModule
  ],
  providers: [{ provide: NZ_I18N, useValue: ru_RU }],
  exports: [
    DatePickerComponent
  ]
})
export class DatePickerModule { }
