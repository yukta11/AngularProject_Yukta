import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserProfileService } from 'src/app/Services/user-profile.service';
import { AuthService } from 'src/app/Services/auth.service';
import { MessageHandleService } from 'src/app/Services/message-handle.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  userDetails:any;
  firstName:any;
  lastName:any;
  Email:any;
  phoneNum:any;
  createdDate:any;
  UpdatedDate:any;
  userImage:any;
  newPassword:any;
  confirmPassword:any;
  test:any;
   public submitted = false;
   public disable = false;



  userDetail = new FormGroup({
    'first-name':new FormControl('',Validators.required),
    'last-name':new FormControl('',Validators.required),
  })

  passwordUpdate =new FormGroup({
    'old-password':new FormControl('',Validators.required),
    'new-password' :new FormControl('',[Validators.required,Validators.pattern("(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}")]),
    'confirm-password': new FormControl('',[Validators.required]),

  })


  constructor(private userData:UserProfileService,private changePassword:AuthService,private msg:MessageHandleService) { }

  ngOnInit(): void {
    this.userData.getUserProfile().subscribe(response=>{
      this.userDetails = response['data'];
      this.firstName = this.userDetails.firstName;
      this.lastName = this.userDetails.lastName;
      this.Email = this.userDetails.email;
      this.phoneNum = this.userDetails.mobileNumber;
      this.createdDate = this.userDetails.createdAt;
      this.UpdatedDate = this.userDetails.updatedAt;
      this.userImage = this.userDetails.image;
      
      console.log(this.userDetails);
    })
  }
  get UserProfile(){
    return this.userDetail.controls
  }
  get Password(){
    return this.passwordUpdate.controls
  }

  userUpdate(){
    
    this.submitted=true;
    if(this.userDetail.valid){
      this.userData.updateProfile(this.userDetail.value).subscribe(response=>{
       this.msg.handleSuccessMessage('Profile Updated!!!')
      })
      console.log('Success')
    }

  }
 
  onChangePassword(){
    this.submitted=true;
    if(this.passwordUpdate.valid){
      this.changePassword.changePassword(this.passwordUpdate.value).subscribe(response=>{
       this.msg.handleSuccessMessage('Password changed!!!')
      },
      (err)=>{
        const error = err.error['errors'];
      
      for(let er in error){
        this.msg.HandleErrorMessage(error[er].title , error[er].message);
        
      }

      })
      
      
    }

    

  }
 


}
