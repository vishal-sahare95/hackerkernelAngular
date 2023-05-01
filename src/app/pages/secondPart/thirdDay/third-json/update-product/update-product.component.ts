import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { productsC } from 'src/app/config/products/product';
import { JsonproductC } from 'src/app/config/secondPart/fourth/jsonproduct';
import { JsonproductService } from 'src/app/config/secondPart/fourth/jsonproduct.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  public productObj:JsonproductC=new JsonproductC()
  public form: FormGroup;
  isSucMsg:boolean=false
  constructor(private fb: FormBuilder, private JsonProductSRV: JsonproductService,private activeRoute:ActivatedRoute,private router:Router) {

    this.form = this.fb.group({
      name:['',[Validators.required]],
      price:['',[Validators.required]],
      quantity:['',[Validators.required]],
  })
  }
  ngOnInit(): void {

      this.getProduct()
      console.log(this.form.value);

  }

  getProduct(){
    console.log(this.activeRoute.snapshot.params['id']);
    const id=this.activeRoute.snapshot.params['id']
    this.JsonProductSRV.getDataById(id).subscribe(suc=>{
      this.form = this.fb.group({
        name:[suc.name,[]],
        price:[suc.price,],
        quantity:[suc.quantity,],
    })

    })
    }


  updateProduct(){
    const id=this.activeRoute.snapshot.params['id']
    this.JsonProductSRV.putData(id,this.form.value).subscribe(suc=>{
    this.router.navigateByUrl('/second-path-second-fouth-task/list')

    })
  }
}
