import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInAuthGuardGuard implements CanActivate {
  constructor(private _authService:LoginService,private _router:Router ){

  }
  canActivate(){
    if (this._authService.isLogIn()) {
      this._router.navigate(['/dashboard'])
      return false
  } else {
      return true
  }
  }
  
}
