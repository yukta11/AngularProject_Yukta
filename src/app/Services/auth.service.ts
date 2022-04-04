import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  client_id = 2;
  client_secret = 'olzBb6we0po4B0PSJyDpNGhhSsnvZmeio8sRoASa';
  grant_type ='password';
  private _registerUrl='https://uat.ordering-dalle.ekbana.net/api/v4/auth/signup';
  private _loginUrl ='https://uat.ordering-dalle.ekbana.net/api/v4/auth/login';
  private _changePasswordUrl = 'https://uat.ordering-dalle.ekbana.net/api/v4/profile/change-password';

  constructor(private http:HttpClient) { }

  registerUser(user:any){
    return this.http.post(this._registerUrl,user)
  }

  
  loginUser(user:any){
    let allData =user;
    allData['client_id'] =this.client_id;
    allData['client_secret']= this.client_secret
    allData['grant_type'] =this.grant_type;
    return this.http.post<any>(this._loginUrl, allData)

  }
  changePassword(user:any){
    return this.http.post(this._changePasswordUrl,user)
  }










  setToken(token :string){
    localStorage.setItem("Authorization", token);
  }
  deleteToken(){
    localStorage.removeItem("Authorization");
  }
  getToken(){
    return localStorage.getItem("Authorization")
  }
  checkToken(){
    const token = localStorage.getItem("Authorization")
    if(token){
      return true;
    }
    else{
      return false;
    }
  }




}
