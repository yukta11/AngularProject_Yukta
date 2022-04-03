import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  constructor(private http:HttpClient) { }
  getABoutUs():Observable<any>{
    let headers = new HttpHeaders({
      'Api-key':'q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6',
     })
     const url='https://uat.ordering-dalle.ekbana.net/api/v4/config'
     return this.http.get(url,{headers:headers})


  }

  
}
