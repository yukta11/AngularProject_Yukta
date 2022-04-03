import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserProfileService } from 'src/app/Services/user-profile.service';
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



  userDetail = new FormGroup({
    first_name:new FormControl('',Validators.required),
    last_name:new FormControl(''),
    email:new FormControl('',[Validators.required,Validators.email]),
    old_password:new FormControl('',Validators.required),
    new_password :new FormControl('',[Validators.required,Validators.pattern("(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}")]),
    confirm_password: new FormControl('',[Validators.required]),
    mobile_number:new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")] )

  })

  constructor(private userData:UserProfileService) { }

  ngOnInit(): void {
    this.userData.getUserProfile().subscribe(response=>{
      this.userDetails = response['data'];
      this.firstName = this.userDetails.firstName;
      this.lastName = this.userDetails.lastName;
      this.Email = this.userDetails.email;
      this.phoneNum = this.userDetails.mobileNumber;
      this.createdDate = this.userDetails.createdAt;
      this.UpdatedDate = this.userDetails.updatedAt;
      
      console.log(this.userDetails);
    })
  }
  onUserdataChange(){
    console.log(this.userDetail.value)
  }

}
