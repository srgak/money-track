import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RiseInputModule } from 'dist/rise-input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { PasswordComponent } from './password.component';



@NgModule({
  declarations: [
    PasswordComponent
  ],
  imports: [
    ReactiveFormsModule,
    NzInputModule,
    NzIconModule,
    RiseInputModule
  ],
  exports: [
    PasswordComponent
  ]
})
export class PasswordModule { }
