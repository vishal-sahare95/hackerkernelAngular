import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './partials/login/login.component';

const routes: Routes = [
  {
    path:'pages',
    loadChildren:()=>import('./pages/day1normal/day1normal.module').then(m=>m.Day1normalModule)
  },
  {
    path:'reactive-form',
    loadChildren:()=>import('./pages/reactive-form/reactive-form.module').then(m=>m.ReactiveFormModule)
  },
  {
    path:'',
   component:LoginComponent
  },
  {
    path:'login',
   component:LoginComponent
  }

];
// loadChildren:()=>import('./page/counting/counting.module').then(m=>m.CountingModule)
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
