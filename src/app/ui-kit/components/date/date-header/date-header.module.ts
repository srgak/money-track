import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateHeaderComponent } from './date-header.component';



@NgModule({
  declarations: [DateHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [DateHeaderComponent]
})
export class DateHeaderModule { }
