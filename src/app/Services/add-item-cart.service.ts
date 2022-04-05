import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddItemCartService {

  constructor(private http:HttpClient) { }

  
  addItemCart(productId:any, priceId:any):Observable<any>{
    const cartData={
      "productId": productId,
      "priceId": priceId,
      "quantity": 1,
      "note": "testing"
    }
    
    const url ='https://uat.ordering-dalle.ekbana.net/api/v4/cart-product';
    return this.http.post(url,cartData);

  }
  getCartData(){
    const url='https://uat.ordering-dalle.ekbana.net/api/v4/cart';
    return this.http.get(url);

  }
  deleteCartItems(id: number) {
    const  url ='https://uat.ordering-dalle.ekbana.net/api/v4/cart-product/'
    return this.http.delete(url+ id);
  }
  updateItemQuantity(id: number, quantity: any) {
    const url ='https://uat.ordering-dalle.ekbana.net/api/v4/cart-product/'
    let data = {"quantity": quantity}
    return this.http.patch<any>(url + id, data);
  }
  
 
}
