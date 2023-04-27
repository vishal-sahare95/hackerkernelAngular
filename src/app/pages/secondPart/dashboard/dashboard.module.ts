import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ViewComponent } from './view/view.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ContaintPageComponent } from './containt-page/containt-page.component';


@NgModule({
  declarations: [
    ViewComponent,
    DashboardPageComponent,
    ContaintPageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TabsModule.forRoot(),
  ]
})
export class DashboardModule { }
