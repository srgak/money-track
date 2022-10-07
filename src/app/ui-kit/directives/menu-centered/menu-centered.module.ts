import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuCenteredDirective } from './menu-centered.directive';



@NgModule({
  declarations: [MenuCenteredDirective],
  imports: [
    CommonModule
  ],
  exports: [MenuCenteredDirective]
})
export class MenuCenteredModule { }
