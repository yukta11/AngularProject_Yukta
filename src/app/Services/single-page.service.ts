import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SinglePageService {

  constructor(private http:HttpClient) { }
  getSinglePage(id:number):Observable<any>{
    const url ='https://uat.ordering-dalle.ekbana.net/api/v4/product/'
    return this.http.get(url+id);
    
  }

}
