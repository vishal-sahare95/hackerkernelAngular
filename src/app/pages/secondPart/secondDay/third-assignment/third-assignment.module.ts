import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdAssignmentRoutingModule } from './third-assignment-routing.module';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddComponent
  ],
  imports: [
    CommonModule,
    ThirdAssignmentRoutingModule,
    ReactiveFormsModule
  ]
})
export class ThirdAssignmentModule { }
