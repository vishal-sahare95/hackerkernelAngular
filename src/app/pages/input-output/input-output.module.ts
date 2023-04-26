import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputOutputRoutingModule } from './input-output-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    InputOutputRoutingModule
  ]
})
export class InputOutputModule { }
