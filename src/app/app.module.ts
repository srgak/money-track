//модули
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//компоненты 
import { AppComponent } from './app.component';
import { FormRegistrationComponent } from './components/form-registration/form-registration.component';
import { FormAuthComponent } from './components/form-auth/form-auth.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';

//сервисы
import { DataService } from './data/data.service';
import { HttpService } from './data/http.service';
import { ValidatorsService } from './data/validators.service';

//директивы
import { FixBlockDirective } from './directives/fix-block.directive';

//ng-zorro
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzIconModule } from 'ng-zorro-antd/icon';

//гарды
import { IsLoggedGuard } from './guards/is-logged.guard';

//валдеморт
import { ValdemortModule } from 'ngx-valdemort';

//свои библиотеки
import { FieldModule } from 'field';
import { DatePickerModule } from 'dist/date-picker';
import { SelectModule } from 'select';
import { PasswordModule } from 'dist/password';
import { AutocompleteModule } from 'dist/autocomplete';

import { WalletsModule } from './components/pages/wallets/wallets.module';
import { AccountModule } from './components/pages/account/account.module';
import { CurrencyModule } from './components/pages/currency/currency.module';
import { DepositModule } from './components/pages/deposit/deposit.module';
import { TestPageModule } from './components/pages/test-page/test-page.module';

@NgModule({
  declarations: [
    AppComponent,
    FixBlockDirective,
    FormRegistrationComponent,
    FormAuthComponent,
    LoginComponent,
    MenuComponent
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
    FieldModule,
    DatePickerModule,
    SelectModule,
    PasswordModule,
    AutocompleteModule,
    //свои страницы
    WalletsModule,
    AccountModule,
    CurrencyModule,
    DepositModule,
    TestPageModule
  ],
  providers: [ 
    DataService,
    IsLoggedGuard,
    HttpService,
    ValidatorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
