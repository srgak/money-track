import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageClockComponent } from "./page-clock.component";

const routes: Routes = [
  {
    path: '',
    component: PageClockComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageClockRoutingModule { }