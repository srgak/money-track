//модули
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule, IConfig } from 'ngx-mask';

//компоненты 
import { AppComponent } from './app.component';
import { WalletsComponent } from './components/wallets/wallets.component';
import { WalletOperationsComponent } from './components/wallet-operations/wallet-operations.component';
import { FormOperationComponent } from './components/form-operation/form-operation.component';
import { FormWalletComponent } from './components/form-wallet/form-wallet.component';
import { FormRegistrationComponent } from './components/form-registration/form-registration.component';
import { FormAuthComponent } from './components/form-auth/form-auth.component';
import { LoginComponent } from './components/login/login.component';
import { FormCurrencyComponent } from './components/form-currency/form-currency.component';
import { AccountComponent } from './components/account/account.component';
import { MenuComponent } from './components/menu/menu.component';

//сервисы
import { DataService } from './data/data.service';

//директивы
import { FixBlockDirective } from './directives/fix-block.directive';

//пайпы
import { ThousandPipe } from './pipes/thousand.pipe';

//ng-zorro
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzIconModule } from 'ng-zorro-antd/icon';

//гарды
import { HasOperationsGuard } from './guards/has-operations.guard';
import { IsLoggedGuard } from './guards/is-logged.guard';

//валдеморт
import { ValdemortModule } from 'ngx-valdemort';

//свои библиотеки
import { FieldModule } from 'field';
import { DatePickerModule } from 'dist/date-picker';
import { SelectModule } from 'select';
import { PasswordModule } from 'dist/password';

@NgModule({
  declarations: [
    AppComponent,
    WalletsComponent,
    WalletOperationsComponent,
    FormOperationComponent,
    FormWalletComponent,
    ThousandPipe,
    FixBlockDirective,
    FormRegistrationComponent,
    FormAuthComponent,
    LoginComponent,
    FormCurrencyComponent,
    AccountComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    //ng-zorro
    NzButtonModule,
    NzRadioModule,
    NzIconModule,

    NgxMaskModule.forRoot(),
    ValdemortModule,
    //свои библиотеки
    FieldModule,
    DatePickerModule,
    SelectModule,
    PasswordModule
  ],
  providers: [ 
    DataService, 
    HasOperationsGuard,
    IsLoggedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
