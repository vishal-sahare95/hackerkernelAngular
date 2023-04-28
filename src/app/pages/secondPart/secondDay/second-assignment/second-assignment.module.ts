import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondAssignmentRoutingModule } from './second-assignment-routing.module';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    SecondAssignmentRoutingModule
  ]
})
export class SecondAssignmentModule { }
