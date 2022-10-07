import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageAutofocusComponent } from "./page-autofocus.component";

const routes: Routes = [
  {
    path: '',
    component: PageAutofocusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageAutofocusRoutingModule { }