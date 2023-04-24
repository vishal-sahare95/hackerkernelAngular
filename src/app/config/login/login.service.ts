import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url="http://localhost:3000/login"
  constructor(private http:HttpClient) { }

  post(data:Login){
return this.http.post(`${this.url}`,data)
  }
}
