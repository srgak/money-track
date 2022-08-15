//модули
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//компоненты 
import { AppComponent } from './app.component';
// import { MenuComponent } from './components/menu/menu.component';

//сервисы
import { DataService } from './data/data.service';
import { HttpService } from './data/http.service';
import { ValidatorsService } from './data/validators.service';

//директивы
import { FixBlockDirective } from './directives/fix-block.directive';
import { StatusCircleDirective } from './directives/status-circle.directive';

//ng-zorro
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzIconModule } from 'ng-zorro-antd/icon';

//гарды
import { IsLoggedGuard } from './guards/is-logged.guard';

//валдеморт
import { ValdemortModule } from 'ngx-valdemort';

//свои библиотеки
import { UiKitModule } from './components/ui-kit/ui-kit.module';
import { SelectMainModule } from './ui-kit/components/select/select-main/select-main.module';
import { AccordionModule } from './ui-kit/components/accordion/accordion.module';

import { NgxMaskModule } from 'ngx-mask';
import { InputLabelDirective } from './ui-kit/directives/input-label/input-label.directive';
import { FieldModule } from './ui-kit/components/field/field.module';
import { InputHelpDirective } from './ui-kit/directives/input-help/input-help.directive';
import { InputPasswdDirective } from './ui-kit/directives/input-passwd/input-passwd.directive';
import { SliderModule } from './ui-kit/components/slider/slider.module';
import { InputClearDirective } from './ui-kit/directives/input-clear/input-clear.directive';
import { ClockMainModule } from './ui-kit/components/clock/clock-main/clock-main.module';
import { DateMainModule } from './ui-kit/components/date/date-main/date-main.module';
import { AutofocusModule } from './ui-kit/components/autofocus/autofocus.module';
import { UI_LANG } from './ui-kit/models/ui-lang';



@NgModule({
  declarations: [
    AppComponent,
    FixBlockDirective,
    StatusCircleDirective,
    InputLabelDirective,
    InputHelpDirective,
    InputPasswdDirective,
    InputClearDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //ng-zorro
    NzRadioModule,
    NzIconModule,

    ValdemortModule,
    //свои библиотеки
    AccordionModule,
    FieldModule,
    SelectMainModule,
    SliderModule,
    ClockMainModule,
    DateMainModule,
    AutofocusModule,
    //свои страницы

    UiKitModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [ 
    DataService,
    IsLoggedGuard,
    HttpService,
    ValidatorsService,
    {
      provide: UI_LANG,
      useValue: 'ru'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
