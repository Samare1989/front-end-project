import { Product } from "./product.class";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = "http://localhost:60105/api";

@Injectable({
    providedIn: 'root'
  })
  export class ProductService {
  
    login(productname:string,password:string):Observable<Product>{
      return this.http.get(`${url}/products/auth/${name}/${password}`) as Observable<Product>;
    }
    list(): Observable<Product[]> {
      return this.http.get(`${url}/products`) as Observable<Product[]>;
    }
  
    get(id: string): Observable <Product > {
      return this.http.get(`${url}/products/${id}`) as Observable<Product>;
    }
  
    create(product:Product):Observable<any>{
      return this.http.post(`${url}/products`, product) as Observable<any>
    }
  
      change(product:Product):Observable<any>{
      return this.http.put(`${url}/product/${product.id}`,product) as Observable<any>
    }
      remove(product:Product):Observable<any>{
        return this.http.delete(`${url}/product/${product.id}`) as Observable<any>
    }
      constructor(private http: HttpClient){ }
    }