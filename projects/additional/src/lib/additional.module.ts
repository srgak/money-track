import { NgModule } from '@angular/core';
import { AdditionalComponent } from './additional.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AdditionalComponent
  ],
  imports: [
    CommonModule,
    NzCheckboxModule,
    FormsModule
  ],
  exports: [
    AdditionalComponent
  ]
})
export class AdditionalModule { }
