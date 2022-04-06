import { Component, OnInit } from '@angular/core';
import { DeliveryAddressService } from 'src/app/Services/delivery-address.service';
import { MessageHandleService } from 'src/app/Services/message-handle.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  allData:any;
  data:any;


  constructor(private getAddress:DeliveryAddressService, private msg:MessageHandleService) { }

  ngOnInit(): void {
    this.getAddress.getAddress().subscribe(response=>{
     this.allData = response;
     this.data = this.allData.data;
     console.log(this.allData);
     
     
    })
  }
  onDeleteAddress(id:any){
    this.getAddress.deleteAddress(id).subscribe(response=>{
      this.msg.handleSuccessMessage('Address deleted!!!')
    })
    
  }

}
