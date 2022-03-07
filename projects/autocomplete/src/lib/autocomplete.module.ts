import { NgModule } from '@angular/core';
import { AutocompleteComponent } from './autocomplete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CommonModule } from '@angular/common';
import { RiseInputModule } from 'dist/rise-input';


@NgModule({
  declarations: [
    AutocompleteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzSelectModule,
    RiseInputModule
  ],
  exports: [
    AutocompleteComponent
  ]
})
export class AutocompleteModule { }
