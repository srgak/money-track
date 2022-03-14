import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerModule } from 'date-picker';
import { FieldModule } from 'field';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SelectModule } from 'select';
import { ValdemortModule } from 'ngx-valdemort';
import { AdditionalModule } from 'dist/additional';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    PipesModule,
    FieldModule,
    DatePickerModule,
    SelectModule,
    AdditionalModule,
    ValdemortModule,

    NzRadioModule
  ]
})
export class SharedModule { }
