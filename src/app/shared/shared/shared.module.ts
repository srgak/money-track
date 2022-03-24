import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerModule } from 'date-picker';
import { FieldModule } from 'field';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SelectModule } from 'select';
import { ValdemortModule } from 'ngx-valdemort';
import { AdditionalModule } from 'dist/additional';
import { ChartModule } from 'dist/chart';


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
    ChartModule,
    ValdemortModule,

    NzRadioModule
  ]
})
export class SharedModule { }
