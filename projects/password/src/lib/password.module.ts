import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ActiveInputDirective } from './directives/active-input.directive';
import { PasswordComponent } from './password.component';



@NgModule({
  declarations: [
    PasswordComponent,
    ActiveInputDirective
  ],
  imports: [
    ReactiveFormsModule,
    NzInputModule,
    NzIconModule
  ],
  exports: [
    PasswordComponent
  ]
})
export class PasswordModule { }
