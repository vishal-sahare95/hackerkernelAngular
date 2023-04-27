import { AfterViewChecked, Component, OnInit, } from '@angular/core';
import { LoginService } from './config/login/login.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'angular15';
    logInValue?: boolean;
    constructor(private loginSRV: LoginService) {
        
        this.loginSRV.islogInValue.subscribe(suc => {
        })
    }
    ngOnInit(): void {
        this.loginSRV.islogInValue.subscribe(suc => {
            this.logInValue = suc
        })
    }



}
