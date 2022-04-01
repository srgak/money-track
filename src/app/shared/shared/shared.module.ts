import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ValdemortModule } from 'ngx-valdemort';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { SelfLibsModule } from './self-libs.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    PipesModule,
    SelfLibsModule,
    ValdemortModule,

    NzRadioModule,
    NzCollapseModule
  ]
})
export class SharedModule { }
