import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationMainComponent } from './pagination-main.component';
import { PaginationBtnModule } from '../pagination-btn/pagination-btn.module';



@NgModule({
  declarations: [PaginationMainComponent],
  imports: [
    CommonModule,
    PaginationBtnModule
  ],
  exports: [PaginationMainComponent]
})
export class PaginationMainModule { }
