import { Component, OnInit } from '@angular/core';
import { AddItemCartService } from 'src/app/Services/add-item-cart.service';
import { MessageHandleService } from 'src/app/Services/message-handle.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product:any;
  test:any;
  totalItems: any;
  page: number = 1
  searchItemValue: any = {title: ''}
  id:any;
  unitPrice:any;
  add_to_cart:any;
 

 

  constructor(private productService:ProductService,private addTocart:AddItemCartService, private msg:MessageHandleService) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(
      respone =>{
        this.product = respone['data']
       
      }
    )
  }
  onAddToCart(id:any,unitPrice:any){
   this.addTocart.addItemCart(id,unitPrice).subscribe(response=>{
     this.msg.handleSuccessMessage("Item added")
     
   })
    

  }
  

}
