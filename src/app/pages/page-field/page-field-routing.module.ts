import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageFieldComponent } from "./page-field.component";

const routes: Routes = [
  {
    path: '',
    component: PageFieldComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageFieldRoutingModule { }