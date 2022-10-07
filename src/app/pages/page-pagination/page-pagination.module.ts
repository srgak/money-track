import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePaginationComponent } from './page-pagination.component';
import { PagePaginationRoutingModule } from './page-pagination-routing.module';
import { UiKitModule } from 'src/app/ui-kit/ui-kit.module';



@NgModule({
  declarations: [PagePaginationComponent],
  imports: [
    CommonModule,
    PagePaginationRoutingModule,
    UiKitModule
  ]
})
export class PagePaginationModule { }
