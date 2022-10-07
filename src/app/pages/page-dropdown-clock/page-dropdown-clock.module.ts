import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDropdownClockComponent } from './page-dropdown-clock.component';
import { PageDropdownClockRoutingModule } from './page-dropdown-clock-routing.module';
import { UiKitModule } from 'src/app/ui-kit/ui-kit.module';



@NgModule({
  declarations: [PageDropdownClockComponent],
  imports: [
    CommonModule,
    PageDropdownClockRoutingModule,
    UiKitModule
  ]
})
export class PageDropdownClockModule { }
