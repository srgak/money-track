import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageDropdownClockComponent } from "./page-dropdown-clock.component";

const routes: Routes = [
  {
    path: '',
    component: PageDropdownClockComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageDropdownClockRoutingModule { }