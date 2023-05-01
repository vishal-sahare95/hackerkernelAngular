import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { JsonproductService } from 'src/app/config/secondPart/fourth/jsonproduct.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
productARR:any[]=[];
seachData:any=""

constructor(private jsonProduct:JsonproductService,private toastr: ToastrService){}

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
      this.toastr.error('Deleted', 'your data has been deleted');
    })
  }



}
