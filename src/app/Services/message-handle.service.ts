import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageHandleService {

  constructor(private message:ToastrService) { }
  handleSuccessMessage(msg:any) {
    this.message.success(msg);
  }

  HandleErrorMessage(title:any, msg:any) {
    this.message.error(title, msg);
  }

}
