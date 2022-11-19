import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedGuard } from './guards/is-logged.guard';
import { HasOperationsGuard } from './guards/has-operations.guard';

const routes: Routes = [
  // {
  //   path: '', 
  //   component: AppComponent, 
  //   pathMatch: 'full'
  // },
  {
    path: 'accordion',
    loadChildren: () => import('./pages/page-accordion/page-accordion.module').then(m => m.PageAccordionModule),
    pathMatch: 'full'
  },
  {
    path: 'field',
    loadChildren: () => import('./pages/page-field/page-field.module').then(m => m.PageFieldModule),
    pathMatch: 'full'
  },
  {
    path: 'slider',
    loadChildren: () => import('./pages/page-slider/page-slider.module').then(m => m.PageSliderModule),
    pathMatch: 'full'
  },
  {
    path: 'dropdown-list',
    loadChildren: () => import('./pages/page-dropdown-list/page-dropdown-list.module').then(m => m.PageDropdownListModule),
    pathMatch: 'full'
  },
  {
    path: 'dropdown-clock',
    loadChildren: () => import('./pages/page-dropdown-clock/page-dropdown-clock.module').then(m => m.PageDropdownClockModule),
    pathMatch: 'full'
  },
  {
    path: 'dropdown-date',
    loadChildren: () => import('./pages/page-dropdown-date/page-dropdown-date.module').then(m => m.PageDropdownDateModule),
    pathMatch: 'full'
  },
  {
    path: 'autofocus',
    loadChildren: () => import('./pages/page-autofocus/page-autofocus.module').then(m => m.PageAutofocusModule),
    pathMatch: 'full'
  },
  {
    path: 'pagination',
    loadChildren: () => import('./pages/page-pagination/page-pagination.module').then(m => m.PagePaginationModule),
    pathMatch: 'full'
  },
  {
    path: 'clock',
    loadChildren: () => import('./pages/page-clock/page-clock.module').then(m => m.PageClockModule),
    pathMatch: 'full'
  },
  {
    path: ':merchantName',
    loadChildren: () => import('./pages/page-clock/page-clock.module').then(m => m.PageClockModule),
    pathMatch: 'full',
    canActivate: [HasOperationsGuard],
    data: {isInit: true}
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
