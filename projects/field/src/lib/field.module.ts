import { NgModule } from '@angular/core';
import { FieldComponent } from './field.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NgxMaskModule } from 'ngx-mask';
import { ActiveInputDirective } from './directives/active-input.directive';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FieldComponent,
    ActiveInputDirective
  ],
  imports: [
    ReactiveFormsModule,
    NzInputModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    FieldComponent
  ]
})
export class FieldModule { }
