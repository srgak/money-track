import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPasswdDirective } from './input-passwd.directive';



@NgModule({
  declarations: [InputPasswdDirective],
  imports: [
    CommonModule
  ],
  exports: [InputPasswdDirective]
})
export class InputPasswdModule { }
