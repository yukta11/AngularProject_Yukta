import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddItemCartService {

  constructor(private http:HttpClient) { }

  
  addItemCart(item:any):Observable<any>{
    
    const url ='https://uat.ordering-dalle.ekbana.net/api/v4/cart-product';
    return this.http.post(url,item)

  }
}
