import { Vendor } from "./vendor.class";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = "http://localhost:60105/api";

@Injectable({
    providedIn: 'root'
  })
  export class VendorService {
  
    login(vendorname:string,password:string):Observable<Vendor>{
      return this.http.get(`${url}/vendors/auth/${name}/${password}`) as Observable<Vendor>;
    }
    list(): Observable<Vendor[]> {
      return this.http.get(`${url}/vendors`) as Observable<Vendor[]>;
    }
  
    get(id: string): Observable <Vendor > {
      return this.http.get(`${url}/vendors/${id}`) as Observable<Vendor>;
    }
  
    create(vendor:Vendor):Observable<any>{
      return this.http.post(`${url}/vendors`,vendor) as Observable<any>
    }
  
      change(vendor:Vendor):Observable<any>{
      return this.http.put(`${url}/vendor/${vendor.id}`,vendor) as Observable<any>
    }
      remove(vendor:Vendor):Observable<any>{
        return this.http.delete(`${url}/vendor/${vendor.id}`) as Observable<any>
    }
      constructor(private http: HttpClient){ }
    }
  