import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstDatRoutingModule } from './first-dat-routing.module';
import { ViewComponent } from './view/view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { TabsModule } from 'ngx-bootstrap/tabs';


@NgModule({
  declarations: [
    ViewComponent,
    AddComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FirstDatRoutingModule,
    ReactiveFormsModule,TabsModule.forRoot(),
  ]
})
export class FirstDatModule { }
