import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SinglePageService {

  constructor(private http:HttpClient) { }
  getSinglePage(id:number):Observable<any>{
    let headers = new HttpHeaders({
      'Api-key':'q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6',
      'Warehouse-Id': "1"
    })
    const url ='https://uat.ordering-dalle.ekbana.net/api/v4/product/'
    return this.http.get(url+id,{headers:headers})
    
  }

}
