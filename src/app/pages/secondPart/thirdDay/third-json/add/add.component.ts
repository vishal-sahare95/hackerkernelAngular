import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JsonproductService } from 'src/app/config/secondPart/fourth/jsonproduct.service';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})
export class AddComponent {
    public form: FormGroup;
    isSucMsg:boolean=false
    constructor(private fb: FormBuilder, private JsonProductSRV: JsonproductService,private router:Router,private toastr: ToastrService) {
        this.form = this.fb.group({
            name:['',[]],
            price:['',],
            quantity:['',],
        })
    }

    saveData(){

        if(this.form.valid){

          console.log(this.form.value);
          this.JsonProductSRV.postdata(this.form.value).subscribe(suc=>{
            console.log(suc);
            this.isSucMsg=true
            this.toastr.success('Hello world!', 'Toastr fun!');
            this.router.navigateByUrl('second-path-second-fouth-task/list')
          })
        }else{
            alert('sorr')
        }



    }






}
