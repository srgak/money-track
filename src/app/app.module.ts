//модули
import { ApplicationRef, DoBootstrap, Injector, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

//компоненты
import { AppComponent } from "./app.component";

//сервисы
import { DataService } from "./services/data/data.service";
import { HttpService } from "./services/http.service";
import { ValidatorsService } from "./services/validators.service";

//директивы
import { FixBlockDirective } from "./directives/fix-block.directive";

//гарды
import { IsLoggedGuard } from "./guards/is-logged.guard";

//валдеморт
import { ValdemortModule } from "ngx-valdemort";

//свои библиотеки
import { UI_LANG } from "./ui-kit/models/ui-lang";
import { MenuModule } from "./ui-kit/components/menu/menu.module";
import { MenuCenteredModule } from "./ui-kit/directives/menu-centered/menu-centered.module";
import { VisualviewportDirective } from "./directives/visualviewport.directive";
import { NgxMaskModule } from "ngx-mask";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlashinfCaretDirective } from "./directives/flasing-caret";
import { VirtualKeyboardComponent } from "./components/virtual-keyboard/virtual-keyboard.component";
import { MinutesFieldComponent } from "./components/minutes-field/minutes-field.component";

@NgModule({
  declarations: [
    AppComponent,
    FixBlockDirective,
    VisualviewportDirective,
    FlashinfCaretDirective,
    VirtualKeyboardComponent,
    MinutesFieldComponent,
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
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    DataService,
    IsLoggedGuard,
    HttpService,
    ValidatorsService,
    {
      provide: UI_LANG,
      useValue: "ru",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
