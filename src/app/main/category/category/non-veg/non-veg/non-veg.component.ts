import { Component, OnInit } from '@angular/core';
import { AddItemCartService } from 'src/app/Services/add-item-cart.service';
import { MessageHandleService } from 'src/app/Services/message-handle.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-non-veg',
  templateUrl: './non-veg.component.html',
  styleUrls: ['./non-veg.component.css']
})
export class NonVegComponent implements OnInit {
  totalItems: any;
  page: number = 1
  productNonVeg:any;

  constructor(private nonVegItem:ProductService, private addTocart:AddItemCartService, private msg:MessageHandleService) { }

  ngOnInit(): void {
    this.nonVegItem.getProduct().subscribe(
      response =>{
        this.productNonVeg = response['data'].filter((ele:any) =>{
          if(ele.categoryTitle == 'NON VEG'){ 
  
            return ele;
            
          }
        })
       
      }
    )
  }
  onAddToCart(id:any,unitPrice:any){
    this.addTocart.addItemCart(id,unitPrice).subscribe(response=>{
      this.msg.handleSuccessMessage("Item added")
      
    })
     
 
   }


}
