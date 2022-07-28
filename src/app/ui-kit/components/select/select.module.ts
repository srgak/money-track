import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { SelectItemComponent } from '../select-item/select-item.component';



@NgModule({
  declarations: [SelectComponent, SelectItemComponent],
  imports: [
    CommonModule
  ],
  exports: [SelectComponent, SelectItemComponent]
})
export class SelectModule { }
