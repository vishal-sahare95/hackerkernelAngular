import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Jsonproduct } from 'src/app/config/secondPart/fourth/jsonproduct';
import { JsonproductService } from 'src/app/config/secondPart/fourth/jsonproduct.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit,OnChanges {
productARR:any[]=[];
seachData:string=''

constructor(private jsonProduct:JsonproductService,private router:Router){}
ngOnInit(): void {
  console.log(this.getAllProduct());

  this.getAllProduct()
}
ngOnChanges(changes: SimpleChanges): void {


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
