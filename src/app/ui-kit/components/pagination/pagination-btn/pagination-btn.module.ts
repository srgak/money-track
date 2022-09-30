import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationBtnComponent } from './pagination-btn.component';



@NgModule({
  declarations: [PaginationBtnComponent],
  imports: [
    CommonModule
  ],
  exports: [PaginationBtnComponent]
})
export class PaginationBtnModule { }
