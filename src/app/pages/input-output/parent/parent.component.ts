import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoodService } from 'src/app/config/foods/food.service';
import { Foods } from 'src/app/config/foods/foods';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  public foodArr:Foods[]=[]
  public form:FormGroup

  constructor(private fb:FormBuilder, private foodSRV:FoodService){
    this.form=this.fb.group({
      name:['',[Validators.required]]
    })

  }

  addFood(){
    if(this.form.valid){
      // this.foodSRV.postFodd(this.form.value).subscribe(suc=>{
      //   console.log(suc);
        
      // })
      this.foodArr.push(this.form.value)
      console.log(this.foodArr);
      this.form.reset()
      
    } 
    else{
      this.form.markAllAsTouched();
      this.form.markAsTouched()
    }
  }

  get name(){
    return this.form.get('name')
  }

  erroMSG={
    name:[
      {type:'required',message:'name is required'}
    ],
    
  }
  

}
