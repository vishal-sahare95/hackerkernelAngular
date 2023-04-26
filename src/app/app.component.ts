import {   AfterViewChecked, Component,   } from '@angular/core';
import { LoginService } from './config/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked{
  title = 'angular15';
  isvisible?:boolean
  constructor(private loginSRV:LoginService){
    
this.menu()
  }



ngAfterViewChecked(): void {
  this.menu()
}

  menu(){

   
    if(localStorage.getItem('token')==''){
      this.isvisible=false
      console.log(`'k' ${this.isvisible}`);
      
        
  }else{
    this.isvisible=true
    console.log(`true ${this.isvisible}`);
  }
  }
  

}
