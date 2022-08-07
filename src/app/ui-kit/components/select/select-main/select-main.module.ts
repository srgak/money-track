import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectMainComponent } from './select-main.component';
import { SelectItemComponent } from '../select-item/select-item.component';
import { SelectTagsComponent } from '../select-tags/select-tags.component';



@NgModule({
  declarations: [SelectMainComponent, SelectItemComponent, SelectTagsComponent],
  imports: [
    CommonModule
  ],
  exports: [SelectMainComponent]
})
export class SelectMainModule { }
