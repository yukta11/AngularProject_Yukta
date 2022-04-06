import { Component, OnInit } from '@angular/core';
import { DeliveryAddressService } from 'src/app/Services/delivery-address.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  allData:any;
  location:any;
  latitude:any;
  longitude:any;
  country:any;
  provience:any;
  district:any;


  constructor(private getAddress:DeliveryAddressService) { }

  ngOnInit(): void {
    this.getAddress.getAddress().subscribe(response=>{
     this.allData = response;
     console.log(this.allData)
     this.location = this.allData.data[0].title;
     this.latitude = this.allData.data[0].latitude;
     this.longitude = this.allData.data[0].longitude;
     this.country = this.allData.data[0].detail.country;
     this.provience = this.allData.data[0].detail.provience;
     this.district = this.allData.data[0].detail.district;

     
    })
  }

}
