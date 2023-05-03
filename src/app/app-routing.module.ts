import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './config/auth.guard';
import { LoginComponent } from './partials/login/login.component';
import { LoggedInAuthGuardGuard } from './config/logged-in-auth-guard.guard';

const routes: Routes = [ 

  { path: '', redirectTo: 'login', pathMatch: 'full' },
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
// second part 

{
  path:'second-path',
  loadChildren:()=>import('./pages/secondPart/first-dat/first-dat.module').then(m=>m.FirstDatModule)
},
{
  path:'second-part-dashboard',
  loadChildren:()=>import('./pages/secondPart/dashboard/dashboard.module').then(m=>m.DashboardModule),
  canActivate:[AuthGuard]
  
},
{
  path:'second-path-second-day',
  loadChildren:()=>import('./pages/secondPart/secondDay/second-assignment/second-assignment.module').then(m=>m.SecondAssignmentModule),
  canActivate:[AuthGuard]
  
},
{
  path:'second-path-second-third-task',
  loadChildren:()=>import('./pages/secondPart/secondDay/third-assignment/third-assignment.module').then(m=>m.ThirdAssignmentModule),
  canActivate:[AuthGuard]
  
},
{
  path:'second-path-second-fouth-task',
  loadChildren:()=>import('./pages/secondPart/thirdDay/third-json/third-json.module').then(m=>m.ThirdJsonModule),
  canActivate:[AuthGuard]
  
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
