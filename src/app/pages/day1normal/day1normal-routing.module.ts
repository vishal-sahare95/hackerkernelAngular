import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolatinComponent } from './interpolatin/interpolatin.component';
import { ClassBindComponent } from './class-bind/class-bind.component';
import { StyleBindComponent } from './style-bind/style-bind.component';

const routes: Routes = [
  {
    path:'binding',
    component:InterpolatinComponent
  },
  {
    path:'class-bind',
    component:ClassBindComponent
  },
  {
    path:'style-bind',
    component:StyleBindComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Day1normalRoutingModule { }
