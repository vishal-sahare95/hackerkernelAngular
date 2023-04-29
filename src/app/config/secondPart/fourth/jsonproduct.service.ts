import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jsonproduct, JsonproductC } from './jsonproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonproductService {
url=' http://localhost:3000/product/'
  constructor(private http:HttpClient) { }
  getAllData():Observable<Jsonproduct[]>{
   return this.http.get<Jsonproduct[]>(this.url)
  }
  getDataById(id:number):Observable<JsonproductC>{
   return this.http.get<JsonproductC>(this.url+id)
  
  }
  postdata(data:JsonproductC):Observable<JsonproductC>{
   return this.http.post<JsonproductC>(this.url,data)
  }
  putData(data:JsonproductC,id:number):Observable<JsonproductC>{
   return this.http.put<JsonproductC>(this.url+id,data)
  }
  deleteData(id:number):Observable<JsonproductC>{
   return this.http.delete<JsonproductC>(this.url+id)
  }
}
