import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, LoginC } from './login';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  islogInValue=new BehaviorSubject(this.isLogIn())
  url = "https://reqres.in/api/login"
  constructor(private http: HttpClient) { }

  post(data: LoginC) {
    return this.http.post<LoginC>(`${this.url}`, data)
  }
  isLogIn() {
    return !!localStorage.getItem('token')
  }
}
