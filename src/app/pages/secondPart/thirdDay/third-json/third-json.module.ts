import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdJsonRoutingModule } from './third-json-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AddComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ThirdJsonRoutingModule,
    ReactiveFormsModule,
    TableModule
  ]
})
export class ThirdJsonModule { }
