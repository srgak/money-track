//модули
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//компоненты 
import { AppComponent } from './app.component';

//сервисы
import { DataService } from './services/data/data.service';
import { HttpService } from './services/http.service';
import { ValidatorsService } from './services/validators.service';

//директивы
import { FixBlockDirective } from './directives/fix-block.directive';
import { StatusCircleDirective } from './directives/status-circle.directive';

//гарды
import { IsLoggedGuard } from './guards/is-logged.guard';

//валдеморт
import { ValdemortModule } from 'ngx-valdemort';

//свои библиотеки
import { UI_LANG } from './ui-kit/models/ui-lang';
import { MenuModule } from './ui-kit/components/menu/menu.module';
import { MenuCenteredModule } from './ui-kit/directives/menu-centered/menu-centered.module';



@NgModule({
  declarations: [
    AppComponent,
    FixBlockDirective,
    StatusCircleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    ValdemortModule,
    //свои библиотеки
    MenuModule,
    MenuCenteredModule,
    //свои страницы
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
