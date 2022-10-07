import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSliderComponent } from './page-slider.component';
import { PageSliderRoutingModule } from './page-slider-routing.module';
import { UiKitModule } from 'src/app/ui-kit/ui-kit.module';



@NgModule({
  declarations: [PageSliderComponent],
  imports: [
    CommonModule,
    PageSliderRoutingModule,
    UiKitModule
  ]
})
export class PageSliderModule { }
