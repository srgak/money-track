import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAutofocusComponent } from './page-autofocus.component';
import { PageAutofocusRoutingModule } from './page-autofocus-routing.module';
import { UiKitModule } from 'src/app/ui-kit/ui-kit.module';



@NgModule({
  declarations: [PageAutofocusComponent],
  imports: [
    CommonModule,
    PageAutofocusRoutingModule,
    UiKitModule
  ]
})
export class PageAutofocusModule { }
