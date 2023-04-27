import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcductC, productsC } from 'src/app/config/products/product';
import { ProductService } from 'src/app/config/products/product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit{
  dataObj:ProcductC=new ProcductC()
  isvisible:boolean=true
  editMode:boolean=false
  constructor(private productSRV:ProductService,private active:ActivatedRoute){

  }
ngOnInit(): void {
  this.productSRV.getProductsById(this.active.snapshot.params['id']).subscribe(suc=>{
   this.dataObj=suc
    // console.log(this.active.snapshot.params['id']);
    
    this.active.queryParamMap.subscribe(suc=>{
      this.editMode=Boolean(suc.get('editMode'))
      console.log(this.editMode+'hhgbjh');
      if(this.editMode){
        this.isvisible=false
      }else{
        this.isvisible=true
      }
      
      
    })
  })
}
}
