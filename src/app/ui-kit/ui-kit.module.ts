import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from './components/accordion/accordion.module';
import { AutofocusModule } from './components/autofocus/autofocus.module';
import { ClockMainModule } from './components/clock/clock-main/clock-main.module';
import { DateMainModule } from './components/date/date-main/date-main.module';
import { FieldModule } from './components/field/field.module';
import { PaginationMainModule } from './components/pagination/pagination-main/pagination-main.module';
import { SelectMainModule } from './components/select/select-main/select-main.module';
import { SliderModule } from './components/slider/slider.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputLabelModule } from './directives/input-label/input-label.module';
import { InputHelpModule } from './directives/input-help/input-help.module';
import { InputPasswdModule } from './directives/input-passwd/input-passwd.module';
import { NgxMaskModule } from 'ngx-mask';
import { InputClearModule } from './directives/input-clear/input-clear.module';
import { MenuCenteredModule } from './directives/menu-centered/menu-centered.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    AccordionModule,
    AutofocusModule,
    ClockMainModule,
    DateMainModule,
    FieldModule,
    PaginationMainModule,
    SelectMainModule,
    SliderModule,

    InputHelpModule,
    InputLabelModule,
    InputPasswdModule,
    InputClearModule,
    MenuCenteredModule,

    ReactiveFormsModule,
    NgxMaskModule
  ]
})
export class UiKitModule { }
