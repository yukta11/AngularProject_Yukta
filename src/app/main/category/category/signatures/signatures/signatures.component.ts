import { Component, OnInit } from '@angular/core';
import { AddItemCartService } from 'src/app/Services/add-item-cart.service';
import { MessageHandleService } from 'src/app/Services/message-handle.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-signatures',
  templateUrl: './signatures.component.html',
  styleUrls: ['./signatures.component.css']
})
export class SignaturesComponent implements OnInit {
  totalItems: any;
  page: number = 1

  constructor(private signatureType:ProductService,private addTocart:AddItemCartService, private msg:MessageHandleService) { }
  productSignatures:any

  ngOnInit(): void {
    this.signatureType.getProduct().subscribe(
      response =>{
        this.productSignatures = response['data'].filter((ele:any) =>{
          if(ele.categoryTitle == 'SIGNATURES'){ 
  
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
