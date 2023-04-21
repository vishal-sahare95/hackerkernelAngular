import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'pages',
    loadChildren:()=>import('./pages/day1normal/day1normal.module').then(m=>m.Day1normalModule)
  }
];
// loadChildren:()=>import('./page/counting/counting.module').then(m=>m.CountingModule)
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
