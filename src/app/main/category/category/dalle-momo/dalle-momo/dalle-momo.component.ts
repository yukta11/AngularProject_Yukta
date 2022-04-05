import { Component, OnInit } from '@angular/core';
import { AddItemCartService } from 'src/app/Services/add-item-cart.service';
import { MessageHandleService } from 'src/app/Services/message-handle.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-dalle-momo',
  templateUrl: './dalle-momo.component.html',
  styleUrls: ['./dalle-momo.component.css']
})
export class DalleMomoComponent implements OnInit {
  productDalleMomo:any;
  totalItems: any;
  page: number = 1

  constructor(private dalleMomoType:ProductService, private addTocart:AddItemCartService, private msg:MessageHandleService ) { }

  ngOnInit(): void {
    this.dalleMomoType.getProduct().subscribe(
      response=>{
        this.productDalleMomo = response['data'].filter((ele:any)=>{
        
            if(ele.categoryTitle == 'DALLE MOMOS'){
              return ele;
            }

        })
        console.log(this.productDalleMomo)

    })
   
  }
  onAddToCart(id:any,unitPrice:any){
    this.addTocart.addItemCart(id,unitPrice).subscribe(response=>{
      this.msg.handleSuccessMessage("Item added")
      
    })
     
 
   }


}
