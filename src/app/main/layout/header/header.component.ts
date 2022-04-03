import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  _loggedIn : boolean =false;

  constructor(private user:AuthService, private router:Router) { 
    const athorization = this.user.checkToken()
    if(athorization){
      this._loggedIn=true;
    }
    else{
      this._loggedIn = false;
    }

  }
  logOut(){
     this.user.deleteToken()
  }

  ngOnInit(): void {
  }

}
