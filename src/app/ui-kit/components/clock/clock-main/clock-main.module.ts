import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockMainComponent } from './clock-main.component';
import { ClockPanelComponent } from 'src/app/ui-kit/components/clock/clock-panel/clock-panel.component';



@NgModule({
  declarations: [ClockMainComponent, ClockPanelComponent],
  imports: [
    CommonModule
  ],
  exports: [ClockMainComponent]
})
export class ClockMainModule { }
