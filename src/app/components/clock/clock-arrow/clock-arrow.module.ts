import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockArrowComponent } from './clock-arrow.component';



@NgModule({
  declarations: [ClockArrowComponent],
  imports: [
    CommonModule
  ],
  exports: [ClockArrowComponent]
})
export class ClockArrowModule { }
