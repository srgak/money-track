import { NgModule } from '@angular/core';
import { AutocompleteComponent } from './autocomplete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CommonModule } from '@angular/common';
import { RiseInputModule } from 'dist/rise-input';
import { TransliterationModule } from 'dist/transliteration';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';


@NgModule({
  declarations: [
    AutocompleteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzSelectModule,
    RiseInputModule,
    TransliterationModule,
    NzAutocompleteModule
  ],
  exports: [
    AutocompleteComponent
  ]
})
export class AutocompleteModule { }
