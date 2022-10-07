import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiKitModule } from 'src/app/ui-kit/ui-kit.module';
import { PageAccordionRoutingModule } from './page-accordion-routing.module';
import { PageAccordionComponent } from './page-accordion.component';

@NgModule({
  declarations: [PageAccordionComponent],
  imports: [
    CommonModule,
    PageAccordionRoutingModule,
    UiKitModule
  ]
})
export class PageAccordionModule { }
