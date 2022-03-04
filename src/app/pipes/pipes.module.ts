import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThousandPipe } from './thousand.pipe';



@NgModule({
  declarations: [
    ThousandPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ThousandPipe
  ]
})
export class PipesModule { }
