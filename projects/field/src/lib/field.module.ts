import { NgModule } from '@angular/core';
import { InputComponent } from './components/input/input.component';
import { FieldComponent } from './field.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NgxMaskModule } from 'ngx-mask';
import { ActiveInputDirective } from './directives/active-input.directive';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FieldComponent,
    InputComponent,
    ActiveInputDirective
  ],
  imports: [
    ReactiveFormsModule,
    NzInputModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    FieldComponent,
    InputComponent
  ]
})
export class FieldModule { }
