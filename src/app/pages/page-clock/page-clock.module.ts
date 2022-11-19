import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageClockComponent } from './page-clock.component';
import { PageClockRoutingModule } from './page-clock-routing.module';
import { ClockMainModule } from 'src/app/components/clock/clock-main/clock-main.module';



@NgModule({
  declarations: [PageClockComponent],
  imports: [
    CommonModule,
    PageClockRoutingModule,
    ClockMainModule
  ],
  exports: [PageClockComponent]
})
export class PageClockModule { }
