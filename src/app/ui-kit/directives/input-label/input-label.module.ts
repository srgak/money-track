import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputLabelDirective } from './input-label.directive';



@NgModule({
  declarations: [InputLabelDirective],
  imports: [
    CommonModule
  ],
  exports: [InputLabelDirective]
})
export class InputLabelModule { }
