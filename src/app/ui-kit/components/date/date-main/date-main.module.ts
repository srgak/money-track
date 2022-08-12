import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateMainComponent } from './date-main.component';
import { DateHeaderModule } from '../date-header/date-header.module';
import { DateBodyModule } from '../date-body/date-body.module';
import { DateFooterModule } from '../date-footer/date-footer.module';


@NgModule({
  declarations: [DateMainComponent],
  imports: [
    CommonModule,
    DateHeaderModule,
    DateBodyModule,
    DateFooterModule,
  ],
  exports: [DateMainComponent]
})
export class DateMainModule { }
