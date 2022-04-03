import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public submitted =false;
   signupForm = new FormGroup({
    first_name:new FormControl('',Validators.required),
    last_name:new FormControl(''),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern("(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}")]),
    mobile_number:new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")] )
    

  })


  constructor(private _register:AuthService) { }
    
  ngOnInit(): void {
    
     
  }
  onSubmit(){
    this.submitted =true;
    if(this.signupForm.valid){
      this._register.registerUser(this.signupForm.value).subscribe(response=>{
               console.log(response)
             })
    }



  }
  get signupData(){
    return this.signupForm.controls
  }
  
 
  
}
