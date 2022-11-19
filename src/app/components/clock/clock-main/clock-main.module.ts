import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockMainComponent } from './clock-main.component';
import { ClockArrowModule } from '../clock-arrow/clock-arrow.module';
import { ClockCircleModule } from '../clock-circle/clock-circle.module';
import { ClockSettingsModule } from '../clock-settings/clock-settings.module';



@NgModule({
  declarations: [ClockMainComponent],
  imports: [
    CommonModule,
    ClockArrowModule,
    ClockCircleModule,
    ClockSettingsModule
  ],
  exports: [ClockMainComponent]
})
export class ClockMainModule { }
