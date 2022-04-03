import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  getCategory():Observable<any>{
   const url = 'https://uat.ordering-dalle.ekbana.net/api/v4/category';
   return this.http.get(url)
   
   
 }
  
}
