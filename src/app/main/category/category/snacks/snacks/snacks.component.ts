import { Component, OnInit } from '@angular/core';
import { AddItemCartService } from 'src/app/Services/add-item-cart.service';
import { MessageHandleService } from 'src/app/Services/message-handle.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})
export class SnacksComponent implements OnInit {
  totalItems: any;
  page: number = 1
  productSnacks:any;

  constructor(private SnacksType:ProductService,private addTocart:AddItemCartService, private msg:MessageHandleService) { }

  ngOnInit(): void {
    this.SnacksType.getProduct().subscribe(
      response =>{
        this.productSnacks = response['data'].filter((ele:any) =>{
          if(ele.categoryTitle == 'SNACKS'){ 
  
            return ele;
            
          }
        })
        console.log(this.productSnacks)
      
     
      }
    )

  }
  onAddToCart(id:any,unitPrice:any){
    this.addTocart.addItemCart(id,unitPrice).subscribe(response=>{
      this.msg.handleSuccessMessage("Item added")
      
    })
     
 
   }

}
