import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDropdownListComponent } from './page-dropdown-list.component';
import { PageDropdownListRoutingModule } from './page-dropdown-list-routing.module';
import { UiKitModule } from 'src/app/ui-kit/ui-kit.module';



@NgModule({
  declarations: [PageDropdownListComponent],
  imports: [
    CommonModule,
    PageDropdownListRoutingModule,
    UiKitModule
  ]
})
export class PageDropdownListModule { }
