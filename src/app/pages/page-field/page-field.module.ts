import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageFieldComponent } from './page-field.component';
import { PageFieldRoutingModule } from './page-field-routing.module';
import { UiKitModule } from 'src/app/ui-kit/ui-kit.module';

@NgModule({
  declarations: [PageFieldComponent],
  imports: [
    CommonModule,
    PageFieldRoutingModule,
    UiKitModule
  ]
})
export class PageFieldModule { }
