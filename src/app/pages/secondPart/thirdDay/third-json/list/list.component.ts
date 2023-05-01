import { Component, OnInit } from '@angular/core';
import { JsonproductService } from 'src/app/config/secondPart/fourth/jsonproduct.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
productARR:any[]=[];
seachData:any=""

constructor(private jsonProduct:JsonproductService){}

  ngOnInit(): void {
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
