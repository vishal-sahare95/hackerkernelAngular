import { Component, OnInit } from '@angular/core';
import { Jsonproduct } from 'src/app/config/secondPart/fourth/jsonproduct';
import { JsonproductService } from 'src/app/config/secondPart/fourth/jsonproduct.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
productARR:any[]=[];


constructor(private jsonProduct:JsonproductService){}
ngOnInit(): void {
  console.log(this.getAllProduct());
  
  this.getAllProduct()
}
getAllProduct(){
  this.jsonProduct.getAllData().subscribe(suc=>{
    this.productARR=suc
  })
}
deleteProduct(i:number){
  this.jsonProduct.deleteData(i).subscribe(suc=>{
    this.getAllProduct()
  })
}
}
