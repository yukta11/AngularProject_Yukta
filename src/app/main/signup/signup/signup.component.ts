import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstNameValue:any ='';
  lastNameValue:any='';
  email:any='';
  password:any='';
  confirmPassword:any='';
  constructor() { }

  ngOnInit(): void {
  }
  onRegister(){
    console.log(this.firstNameValue + " " + this.lastNameValue + " "+ this.email +" "+ this.password+" "+this.confirmPassword)
  }

}
