import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnketaMainComponent } from './anketa-main.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AnketaMainComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AnketaMainComponent
  ]
})
export class AnketaMainModule { }
