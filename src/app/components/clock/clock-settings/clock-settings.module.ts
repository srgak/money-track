import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockSettingsComponent } from './clock-settings.component';



@NgModule({
  declarations: [ClockSettingsComponent],
  imports: [
    CommonModule
  ],
  exports: [ClockSettingsComponent]
})
export class ClockSettingsModule { }
