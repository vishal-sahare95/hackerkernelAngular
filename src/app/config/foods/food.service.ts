import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FoodsC } from './foods';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  url="http://localhost:3000/foods"
  constructor(private http:HttpClient) { }
  getAllFood(){
    return this.http.get(this.url)
  }
  postFodd(data:FoodsC){
    return this.http.post(this.url,data)
  }
}
