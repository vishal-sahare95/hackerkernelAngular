import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ViewComponent } from './view/view.component';
import { AppModule } from 'src/app/app.module';
import { TabsModule } from 'ngx-bootstrap/tabs';


@NgModule({
  declarations: [
    ViewComponent,
  
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppModule,
    TabsModule.forRoot(),
  ]
})
export class DashboardModule { }
