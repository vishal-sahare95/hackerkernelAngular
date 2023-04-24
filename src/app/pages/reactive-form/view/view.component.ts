import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/config/products/product';
import { ProductService } from 'src/app/config/products/product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public  productsArr:Product[]=[]
  
constructor( private productSRV:ProductService, private active:ActivatedRoute){

}
ngOnInit(): void {
 this.getAllProducts()
}
getAllProducts(){
  this.productSRV.getAppProducts().subscribe(suc=>{
    this.productsArr=suc
    console.log(this.productsArr);
    
  })

}

deleteProduct(i:any){
this.productSRV.deleteProduct(i).subscribe(suc=>{
  console.log(suc);
  this.getAllProducts()
})
}
}
