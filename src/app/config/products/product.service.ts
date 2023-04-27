import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProcductC, Product, productsC } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
url="http://localhost:3000/products"
  constructor(private http:HttpClient) { }

  getAppProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.url)
  }
  getProductsById(id:number):Observable<ProcductC>{
    return this.http.get<ProcductC>(this.url+"/"+id)
  }
  
  postProduct(data:productsC):Observable<productsC>{
    return this.http.post<productsC>(this.url,data)
  }
  deleteProduct(id:number):Observable<productsC>{
    return this.http.delete<productsC>(`${this.url}/${id}`)

  }

  // getAllProducts():Observable<products[]>{
  //   return this.http.get<products[]>(this.url)
  //     }
  //     postProduct(data:productsC):Observable<productsC>{
  //       return this.http.post<productsC>(this.url,data)
        
  //     }
  //     delete(id:number):Observable<productsC>{
  //       return this.http.delete<productsC>(`${this.url}/${id}`)
  //     }
}
