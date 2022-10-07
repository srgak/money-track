import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputClearDirective } from './input-clear.directive';



@NgModule({
  declarations: [InputClearDirective],
  imports: [
    CommonModule
  ],
  exports: [InputClearDirective]
})
export class InputClearModule { }
