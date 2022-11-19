import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockCircleComponent } from './clock-circle.component';



@NgModule({
  declarations: [ClockCircleComponent],
  imports: [
    CommonModule
  ],
  exports: [ClockCircleComponent]
})
export class ClockCircleModule { }
