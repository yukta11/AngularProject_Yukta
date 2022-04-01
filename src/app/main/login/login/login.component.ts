import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailValue:any='';
  passwordValue:any='';


  constructor() { }

  ngOnInit(): void {
  }
  onLogin(){
    console.log(this.emailValue);
    console.log(this.passwordValue);

  }

}
