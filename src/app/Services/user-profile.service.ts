import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private getProfileUrl = 'https://uat.ordering-dalle.ekbana.net/api/v4/profile/show';
  private patchProfileUrl =  'https://uat.ordering-dalle.ekbana.net/api/v4/profile';


  constructor(private http:HttpClient) { }
  getUserProfile():Observable<any>{
    return this.http.get(this.getProfileUrl);
  }
  updateProfile(data:any):Observable<any>{
    return this.http.patch(this.patchProfileUrl,data);
  }


}
