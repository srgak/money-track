import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { SelectItemComponent } from '../select-item/select-item.component';
import { SelectTagsComponent } from '../select-tags/select-tags.component';



@NgModule({
  declarations: [SelectComponent, SelectItemComponent, SelectTagsComponent],
  imports: [
    CommonModule
  ],
  exports: [SelectComponent, SelectItemComponent]
})
export class SelectModule { }
