import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Day1normalRoutingModule } from './day1normal-routing.module';
import { InterpolatinComponent } from './interpolatin/interpolatin.component';
import { ClassBindComponent } from './class-bind/class-bind.component';
import { StyleBindComponent } from './style-bind/style-bind.component';


@NgModule({
  declarations: [
    InterpolatinComponent,
    ClassBindComponent,
    StyleBindComponent,
  ],
  imports: [
    CommonModule,
    Day1normalRoutingModule
  ],
  exports:[
    InterpolatinComponent,
  ]
})
export class Day1normalModule { }
