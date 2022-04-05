import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { MessageHandleService } from 'src/app/Services/message-handle.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public submitted =false;
 
  loginForm = new FormGroup({
    username : new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.pattern("(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}")])
  })
  

  constructor(private _login:AuthService,private router:Router, private msg:MessageHandleService) { }

  ngOnInit(): void {
  }
  onLogin(){
    this.submitted = true;
    if(this.loginForm.valid){
      this._login.loginUser(this.loginForm.value).subscribe(response=>{
    
        this._login.setToken(response['access_token']);
        this.msg.handleSuccessMessage("Login Successfull")
        this.router.navigate(['/home'])
       
      
      },
      (err)=>{
        const error = err.error['errors'];
      
      for(let er in error){
        this.msg.HandleErrorMessage(error[er].title , error[er].message);
    
      }
      }
      )
      
      // console.log(this.loginForm.value)
      
      

    }
    else{
      console.log('Invalid info')
    }

  
  }
  get formControl(){
    return this.loginForm.controls;
  }

}
