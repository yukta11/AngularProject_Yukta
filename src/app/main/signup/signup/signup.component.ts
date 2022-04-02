import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    firstName:new FormControl('',Validators.required),
    lastName:new FormControl(''),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)]),
    cpassword:new FormControl('',Validators.required),
    phoneNumber:new FormControl('',Validators.required)
    

  })


  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.warn(this.signupForm.value)
  }
  get signupData(){
    return this.signupForm.controls
  }
 
  
}
