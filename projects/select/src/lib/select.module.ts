import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RiseInputModule } from 'dist/rise-input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SelectComponent } from './select.component';



@NgModule({
  declarations: [
    SelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzSelectModule,
    RiseInputModule
  ],
  exports: [
    SelectComponent
  ]
})
export class SelectModule { }
