import { Component, OnInit } from '@angular/core';
import { AddItemCartService } from 'src/app/Services/add-item-cart.service';
import { MessageHandleService } from 'src/app/Services/message-handle.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-momo',
  templateUrl: './momo.component.html',
  styleUrls: ['./momo.component.css']
})
export class MomoComponent implements OnInit {
  productMomo:any;
  totalItems: any;
  page: number = 1

  constructor(private momoType:ProductService,private addTocart:AddItemCartService, private msg:MessageHandleService) { }

  ngOnInit(): void {
    this.momoType.getProduct().subscribe(response=>
      {
        this.productMomo = response['data'].filter((ele:any)=>
        {
            if(ele.categoryTitle =='MOMO'){
              return ele;
            }

        })
        console.log(this.productMomo)
      })
  }
  onAddToCart(id:any,unitPrice:any){
    this.addTocart.addItemCart(id,unitPrice).subscribe(response=>{
      this.msg.handleSuccessMessage("Item added")
      
    })
     
 
   }

}
