import { NgModule } from '@angular/core';
import { FieldComponent } from './field.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { RiseInputModule } from 'dist/rise-input';


@NgModule({
  declarations: [
    FieldComponent
  ],
  imports: [
    ReactiveFormsModule,
    NzInputModule,
    NgxMaskModule.forRoot(),
    RiseInputModule
  ],
  exports: [
    FieldComponent
  ]
})
export class FieldModule { }
