import { NgModule } from '@angular/core';
import { AutocompleteComponent } from './autocomplete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RiseInputModule } from 'dist/rise-input';
import { TransliterationModule } from 'dist/transliteration';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';


@NgModule({
  declarations: [
    AutocompleteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RiseInputModule,
    TransliterationModule,
    NzInputModule,
    NzAutocompleteModule
  ],
  exports: [
    AutocompleteComponent
  ]
})
export class AutocompleteModule { }
