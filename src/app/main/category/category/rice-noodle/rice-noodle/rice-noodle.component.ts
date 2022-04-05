import { Component, OnInit } from '@angular/core';
import { AddItemCartService } from 'src/app/Services/add-item-cart.service';
import { MessageHandleService } from 'src/app/Services/message-handle.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-rice-noodle',
  templateUrl: './rice-noodle.component.html',
  styleUrls: ['./rice-noodle.component.css']
})
export class RiceNoodleComponent implements OnInit {
  totalItems: any;
  page: number = 1
  productRiceNoodle:any;

  constructor(private riceNoddleType:ProductService, private addTocart:AddItemCartService, private msg:MessageHandleService) { }

  ngOnInit(): void {
    this.riceNoddleType.getProduct().subscribe(response=>
      {
        this.productRiceNoodle = response['data'].filter((ele:any)=>
        {

          if(ele.categoryTitle == 'RICE AND NOODLES'){
            return ele;
          }

        })
        console.log(this.productRiceNoodle)

      })
  }
  onAddToCart(id:any,unitPrice:any){
    this.addTocart.addItemCart(id,unitPrice).subscribe(response=>{
      this.msg.handleSuccessMessage("Item added")
      
    })
     
 
   }

}
