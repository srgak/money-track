import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdditionalModule } from 'dist/additional';
import { AutocompleteModule } from 'dist/autocomplete';
import { ChartModule } from 'dist/chart';
import { DatePickerModule } from 'date-picker';
import { FieldModule } from 'field';
import { PasswordModule } from 'dist/password';
import { SelectModule } from 'select';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    AdditionalModule,
    AutocompleteModule,
    ChartModule,
    DatePickerModule,
    FieldModule,
    PasswordModule,
    SelectModule
  ]
})
export class SelfLibsModule { }
