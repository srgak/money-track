import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageDropdownDateComponent } from "./page-dropdown-date.component";

const routes: Routes = [
  {
    path: '',
    component: PageDropdownDateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageDropdownDateRoutingModule { }