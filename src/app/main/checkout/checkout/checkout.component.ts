import { Component, OnInit } from '@angular/core';
import { AddItemCartService } from 'src/app/Services/add-item-cart.service';
import { MessageHandleService } from 'src/app/Services/message-handle.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DeliveryAddressService } from 'src/app/Services/delivery-address.service';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartData:any;
  total:number =0;

  addressForm = new FormGroup({
    title : new FormControl('',Validators.required),
    latitude : new FormControl('',Validators.required),
    longitude : new FormControl('', Validators.required)
  })
  

  constructor(private getCartProduct:AddItemCartService, private msg:MessageHandleService,private deliveryAddress:DeliveryAddressService) { }

  ngOnInit(): void {
    this.getCartProduct.getCartData().subscribe((response:any) => {
     
      this.cartData = response['data']['cartProducts']
      this.total = this.cartData.length;
      
    })
  }
  deleteCartItems(id: number) {
    const warn = confirm("Remove this item?")
    if (warn) {
      this.getCartProduct.deleteCartItems(id).subscribe((response) => {
        this.msg.handleSuccessMessage("Item removed");
        this.getCartProduct.getCartData().subscribe((response:any) => {
          this.cartData = response['data']['cartProducts'];
          this.total = this.cartData.length;
        })

      })
    }
  }
  increaseItem(id: number) {
    let quantity: number = 0;
    const items = this.cartData;
    for(let i of items) {
      if(i.id == id) {
        quantity = i.quantity + 1;
        this.getCartProduct.updateItemQuantity(id, quantity).subscribe((response) => {
          this.getCartProduct.getCartData().subscribe((response:any) => {
            this.cartData = response['data']['cartProducts'];
            this.total = this.cartData.length;
            console.log(response)
          })
        })
      }
    }
  }

  decreaseItem(id: number) {
    let quantity: number = 0;
    const items = this.cartData;
    for(let i of items) {
      if(i.id == id) {
        if (i.quantity > 1) {
          quantity = i.quantity - 1;
          this.getCartProduct.updateItemQuantity(id, quantity).subscribe((response) => {
            this.getCartProduct.getCartData().subscribe((response:any) => {
            this.cartData = response['data']['cartProducts'];
            this.total = this.cartData.length;
          })
        })
        }
      }
    }

  }
  onSubmitAddress(){
    if(this.addressForm.valid){
      this.deliveryAddress.postAddress(this.addressForm.value).subscribe(response =>{
        this.msg.handleSuccessMessage('Delivery address added');
      },
      (err)=>{
        const error = err.error['errors'];
        for(let er in error){
          this.msg.HandleErrorMessage(error[er].title , error[er].message);
          
        }
      })

    }
   
    
  }
}
