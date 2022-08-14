import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutofocusComponent } from './autofocus.component';
import { AutofocusMarkModule } from '../autofocus-mark/autofocus-mark.module';
import { AutofocusMarkComponent } from '../autofocus-mark/autofocus-mark.component';



@NgModule({
  declarations: [AutofocusComponent],
  imports: [
    CommonModule,
    AutofocusMarkModule
  ],
  exports: [AutofocusComponent, AutofocusMarkComponent]
})
export class AutofocusModule { }
