import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddItemCartService {
  postItemUrl = 'https://uat.ordering-dalle.ekbana.net/api/v4/cart-product';
  getcartItemUrl = 'https://uat.ordering-dalle.ekbana.net/api/v4/cart';
  changeCartItemUrl = 'https://uat.ordering-dalle.ekbana.net/api/v4/cart-product/'

  constructor(private http:HttpClient) { }

  
  addItemCart(productId:any, priceId:any):Observable<any>{
    const cartData={
      "productId": productId,
      "priceId": priceId,
      "quantity": 1,
      "note": "testing"
    }
    return this.http.post(this.postItemUrl,cartData);

  }


  getCartData(){
  
    return this.http.get(this.getcartItemUrl);

  }


  deleteCartItems(id: number) {
   
    return this.http.delete(this.changeCartItemUrl+ id);
  }

  
  updateItemQuantity(id: number, quantity: any) {
   
    let data = {"quantity": quantity}
    return this.http.patch<any>(this.changeCartItemUrl + id, data);
  }
  
  
 
}
