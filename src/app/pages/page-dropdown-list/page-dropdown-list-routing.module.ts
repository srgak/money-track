import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageDropdownListComponent } from "./page-dropdown-list.component";

const  routes: Routes = [
  {
    path: '',
    component: PageDropdownListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageDropdownListRoutingModule { }