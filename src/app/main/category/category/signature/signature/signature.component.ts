import { Component, OnInit } from '@angular/core';
import { AddItemCartService } from 'src/app/Services/add-item-cart.service';
import { MessageHandleService } from 'src/app/Services/message-handle.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements OnInit {
  totalItems: any;
  page: number = 1

  productSignature:any;

  constructor(private signatureType:ProductService,private addTocart:AddItemCartService, private msg:MessageHandleService) { }

  ngOnInit(): void {
    this.signatureType.getProduct().subscribe(response=>
      {
        this.productSignature = response['data'].filter((ele:any)=>
        {
            if(ele.categoryTitle =='SIGNATURE'){
              return ele;
            }

        })
        console.log(this.productSignature)
      })
  }
  onAddToCart(id:any,unitPrice:any){
    this.addTocart.addItemCart(id,unitPrice).subscribe(response=>{
      this.msg.handleSuccessMessage("Item added")
      
    })
     
 
   }

}
