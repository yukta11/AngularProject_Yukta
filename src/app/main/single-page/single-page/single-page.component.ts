import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddItemCartService } from 'src/app/Services/add-item-cart.service';
import { MessageHandleService } from 'src/app/Services/message-handle.service';
import { SinglePageService } from 'src/app/Services/single-page.service';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent implements OnInit {
  singleContent:any;
  

  constructor(private activeroute:ActivatedRoute, private singlePage:SinglePageService, private addTocart:AddItemCartService, private msg:MessageHandleService) {
    const productId = this.activeroute.snapshot.params['id']
    this.singlePage.getSinglePage(productId).subscribe(response=>{
        this.singleContent=response['data']
        console.log(this.singleContent)
    })
   }

  ngOnInit(): void {
    
      }
  onAddToCart(id:any,unitPrice:any){
        this.addTocart.addItemCart(id,unitPrice).subscribe(response=>{
          this.msg.handleSuccessMessage("Item added")
          
        })
         
     
       }
    
  }


