import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ActiveInputDirective } from './directives/active-input.directive';
import { SelectComponent } from './select.component';



@NgModule({
  declarations: [
    SelectComponent,
    ActiveInputDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzSelectModule
  ],
  exports: [
    SelectComponent
  ]
})
export class SelectModule { }
