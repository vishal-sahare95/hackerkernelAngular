import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/config/login/login.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {
 
  constructor(private router:Router,){

  }
  ngOnInit(): void {
  }
  logOut(){
 
    localStorage.setItem('token','');
    this.router.navigateByUrl('login')
  }
}
