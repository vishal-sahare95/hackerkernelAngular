import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './config/auth.guard';
import { LoginComponent } from './partials/login/login.component';
import { LoggedInAuthGuardGuard } from './config/logged-in-auth-guard.guard';

const routes: Routes = [ 
 
  {
    path:'login',
   component:LoginComponent,
   canActivate:[LoggedInAuthGuardGuard]
  },
  {
    path:'pages',
    loadChildren:()=>import('./pages/day1normal/day1normal.module').then(m=>m.Day1normalModule),
    canActivate:[AuthGuard]
    
  },
  {
    path:'reactive-form',
    loadChildren:()=>import('./pages/reactive-form/reactive-form.module').then(m=>m.ReactiveFormModule),
    canActivate:[AuthGuard]
  },
  {
    path:'parent-to-child',
    loadChildren:()=>import('./pages/input-output/input-output.module').then(m=>m.InputOutputModule),
    canActivate:[AuthGuard]
  },
  {
    path:'dashboard',
    loadChildren:()=>import('./pages/dashboard/dashboard.module').then(m=>m.DashboardModule),
    canActivate:[AuthGuard]
  },



];
// loadChildren:()=>import('./page/counting/counting.module').then(m=>m.CountingModule)
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
