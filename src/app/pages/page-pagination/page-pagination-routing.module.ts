import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagePaginationComponent } from "./page-pagination.component";

const routes: Routes = [
  {
    path: '',
    component: PagePaginationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagePaginationRoutingModule { }