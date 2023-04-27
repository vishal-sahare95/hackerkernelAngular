import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ContaintPageComponent } from './containt-page/containt-page.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardPageComponent
  },
  {
    path:'containt',
    component:ContaintPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
