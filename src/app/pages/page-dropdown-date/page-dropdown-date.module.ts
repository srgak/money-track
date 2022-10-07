import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDropdownDateComponent } from './page-dropdown-date.component';
import { UiKitModule } from 'src/app/ui-kit/ui-kit.module';
import { PageDropdownDateRoutingModule } from './page-dropdown-date-routing.module';



@NgModule({
  declarations: [PageDropdownDateComponent],
  imports: [
    CommonModule,
    PageDropdownDateRoutingModule,
    UiKitModule
  ]
})
export class PageDropdownDateModule { }
