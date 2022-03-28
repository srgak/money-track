import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPageRoutingModule } from './test-page-routing.module';
import { TestPageComponent } from './test-page.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { FieldModule } from 'field';
import { PasswordModule } from 'dist/password';
import { AutocompleteModule } from 'dist/autocomplete';
import { SelectModule } from 'select';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    TestPageComponent
  ],
  imports: [
    CommonModule,
    TestPageRoutingModule,
    SharedModule,
    FieldModule,
    PasswordModule,
    AutocompleteModule,
    SelectModule,
    ReactiveFormsModule
  ]
})
export class TestPageModule { }
