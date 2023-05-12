import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FioComponent } from './fio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValdemortModule } from 'ngx-valdemort';



@NgModule({
  declarations: [FioComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ValdemortModule,
  ],
  exports: [FioComponent]
})
export class FioModule { }
