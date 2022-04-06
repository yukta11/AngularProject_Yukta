import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { MessageHandleService } from 'src/app/Services/message-handle.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public submitted =false;
  test:any;
   signupForm = new FormGroup({
    first_name:new FormControl('',Validators.required),
    last_name:new FormControl(''),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern("(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}")]),
    mobile_number:new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")] )
    

  })


  constructor(private _register:AuthService, private msg:MessageHandleService, private router:Router) { }
    
  ngOnInit(): void {
    
     
  }
  onSubmit(){
    this.submitted =true;
    if(this.signupForm.valid){
      this._register.registerUser(this.signupForm.value).subscribe(response=>{
               this.msg.handleSuccessMessage('Signup successfull!!!')
               this.router.navigate(['/login'])
       },
       (err)=>{
        const error = err.error['errors'];
        
        for(let er in error){
          this.msg.HandleErrorMessage(error[er].title , error[er].message);
          
        }
      })
    }
   



  }
  get signupData(){
    return this.signupForm.controls
  }
  
 
  
}
