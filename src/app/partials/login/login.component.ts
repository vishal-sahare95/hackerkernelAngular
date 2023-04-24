import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    public form: FormGroup;
    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            email: ['', [Validators.required]],
            password: ['', [Validators.required]],
        })
    }

    get email(){
        return this.form.get('email')
    }
    get password(){
        return this.form.get('password')
    }
    login(){
    if(this.form.valid){
        console.log(this.form.value);
        
    }
    else{
        this.form.markAllAsTouched();
        this.form.markAsTouched(); 
    }
    }

    errorMSG={
        email:[
            { type:'required',message:'email is required'}
        ],
        password:[
            { type:'required',message:'password is required'}
        ],
    }
}
