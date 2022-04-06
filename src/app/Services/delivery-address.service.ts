import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DeliveryAddressService {
  isDefault =true;
  AddressUrl = 'https://uat.ordering-dalle.ekbana.net/api/v4/delivery-address';

  constructor(private http:HttpClient) { }

postAddress(addressData:any ){
  let allAddress = addressData;
  allAddress['isDefault'] = this.isDefault;
  return this.http.post(this.AddressUrl,allAddress)

}
getAddress(){
  return this.http.get(this.AddressUrl);
}

}

