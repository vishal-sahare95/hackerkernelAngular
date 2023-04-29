import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormGroup , FormBuilder,Validators, FormArray, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { Product, productsC } from 'src/app/config/products/product';
import { ProductService } from 'src/app/config/products/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
 
  public form:FormGroup

  constructor( private fb:FormBuilder, private prodoctSRV:ProductService,private router:Router ){
    this.form=this.fb.group({
      name:['',[Validators.required]],
      products:this.fb.array([],[Validators.required])
    })

  }
  get name() {
    return this.form.controls["name"] as FormControl;
  }
  get products() {
    return this.form.controls["products"] as FormArray;
  }
  pname(i:number){
    return this.form.controls[i].get('pname')
  }
  addProducts() {
    const productsForm = this.fb.group({
      pname: ['', Validators.required],
      price: [' ', Validators.required],
      quantity: [' ', Validators.required]
    }); 
     this.products.push(productsForm);
  }
  save(){
  if(this.form.valid){

        this.prodoctSRV.postProduct(this.form.value).subscribe((suc)=>{  
           
      }) 
      this.router.navigateByUrl('reactive-form/view')
    }
    else{
        
        this.form.markAllAsTouched()
        this.form.markAsTouched()
    }

  }


    deleteProduct(producuIdx: number) {
      this.products.removeAt(producuIdx);
  }

  erroMSG={
    name:[
      {type:'required',message:'name is required'}
    ],
    products: [
			{ type: 'required', message: 'this is required' },

		],

      
      
    
  }
}
