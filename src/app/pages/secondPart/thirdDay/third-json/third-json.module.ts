import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdJsonRoutingModule } from './third-json-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { UpdateProductComponent } from './update-product/update-product.component';
import { SearchPipe } from 'src/app/config/search.pipe';

@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    UpdateProductComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    ThirdJsonRoutingModule,
    ReactiveFormsModule,
    TableModule,
    FormsModule
  ]
})
export class ThirdJsonModule { }
