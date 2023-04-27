import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/config/login/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
    logInValue?:boolean
    errorMSG = {
        email: [
            { type: 'required', message: 'email is required' }
        ],
        password: [
            { type: 'required', message: 'password is required' }
        ],
    }

    
    public form: FormGroup;
    constructor(private fb: FormBuilder, private loginSRV: LoginService, private router: Router) {
        this.form = this.fb.group({
            email: ['', [Validators.required]],
            password: ['', [Validators.required]],
        })
      
    }

    ngOnInit(): void {
        //   this.loginSRV.islogInValue.subscribe(suc=>{
        //     console.log(suc+'before');
            
        //     suc=this.loginSRV.isLogIn()
        //     console.log(suc);
            
        // })
    }

    get email() {
        return this.form.get('email')
    }
    get password() {
        return this.form.get('password')
    }

    login() {
        if (this.form.valid) {
            this.loginSRV.post(this.form.value).subscribe(suc => {
                localStorage.setItem('token', suc.token);
                this.loginSRV.islogInValue.next(true)               //this is for hide and show menubar
            
                this.router.navigateByUrl('reactive-form/view')
            
            })
        }
        else {
            this.form.markAllAsTouched();
            this.form.markAsTouched();
        }
    }
}
