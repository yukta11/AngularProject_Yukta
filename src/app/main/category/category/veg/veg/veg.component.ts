import { Component, OnInit } from '@angular/core';
import { AddItemCartService } from 'src/app/Services/add-item-cart.service';
import { MessageHandleService } from 'src/app/Services/message-handle.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-veg',
  templateUrl: './veg.component.html',
  styleUrls: ['./veg.component.css']
})
export class VegComponent implements OnInit {
  totalItems: any;
  page: number = 1
  productVeg:any

  constructor(private vegType:ProductService,private addTocart:AddItemCartService, private msg:MessageHandleService) { }

  ngOnInit(): void {
    this.vegType.getProduct().subscribe(
      response =>{
        this.productVeg = response['data'].filter((ele:any) =>{
          if(ele.categoryTitle == 'SNACKS'){ 
  
            return ele;
            
          }
        })
        console.log(this.productVeg)
      
     
      }
    )
  }
  onAddToCart(id:any,unitPrice:any){
    this.addTocart.addItemCart(id,unitPrice).subscribe(response=>{
      this.msg.handleSuccessMessage("Item added")
      
    })
     
 
   }

}
