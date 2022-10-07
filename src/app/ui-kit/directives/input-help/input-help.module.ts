import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputHelpDirective } from './input-help.directive';



@NgModule({
  declarations: [InputHelpDirective],
  imports: [
    CommonModule
  ],
  exports: [InputHelpDirective]
})
export class InputHelpModule { }
