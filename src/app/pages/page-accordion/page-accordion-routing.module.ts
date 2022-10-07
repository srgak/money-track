import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageAccordionComponent } from "./page-accordion.component";

const routes: Routes = [
  {
    path: '',
    component: PageAccordionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageAccordionRoutingModule { }