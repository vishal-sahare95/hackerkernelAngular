import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/config/login/login.service';

@Component({
    selector: 'app-menubar',
    templateUrl: './menubar.component.html',
    styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {
    logInValue?: boolean
    
    constructor(private router: Router, private loginSRV: LoginService) {

    }
    ngOnInit(): void {

        this.loginSRV.islogInValue.subscribe(suc => {
            this.logInValue = suc
        })
    }

    logOut() {
        this.loginSRV.islogInValue.next(false)
        localStorage.setItem('token', '');
        this.router.navigateByUrl('login')
    }
}
