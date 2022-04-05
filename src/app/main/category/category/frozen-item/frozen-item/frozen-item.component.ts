import { Component, OnInit } from '@angular/core';
import { AddItemCartService } from 'src/app/Services/add-item-cart.service';
import { MessageHandleService } from 'src/app/Services/message-handle.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-frozen-item',
  templateUrl: './frozen-item.component.html',
  styleUrls: ['./frozen-item.component.css']
})
export class FrozenItemComponent implements OnInit {
  totalItems: any;
  page: number = 1
  productFrozenItem:any

  constructor(private frozenItemType:ProductService,private addTocart:AddItemCartService, private msg:MessageHandleService) { }

  ngOnInit(): void {
    this.frozenItemType.getProduct().subscribe(response=>
      {
        this.productFrozenItem = response['data'].filter((ele:any)=>
        {
            if(ele.categoryTitle =='FROZEN ITEMS'){
              return ele;
            }

        })
        console.log(this.productFrozenItem)
      })
  }
  onAddToCart(id:any,unitPrice:any){
    this.addTocart.addItemCart(id,unitPrice).subscribe(response=>{
      this.msg.handleSuccessMessage("Item added")
      
    })
     
 
   }

}
