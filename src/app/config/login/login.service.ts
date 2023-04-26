import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, LoginC } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url="https://reqres.in/api/login"
  constructor(private http:HttpClient) { }

  post(data:LoginC){
return this.http.post<LoginC>(`${this.url}`,data)
  }
  isLogIn(){
   return !! localStorage.getItem('token')
  }
}
