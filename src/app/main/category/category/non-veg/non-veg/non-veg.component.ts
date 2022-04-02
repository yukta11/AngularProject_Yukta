import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-non-veg',
  templateUrl: './non-veg.component.html',
  styleUrls: ['./non-veg.component.css']
})
export class NonVegComponent implements OnInit {
  productNonVeg:any;

  constructor(private nonVegItem:ProductService) { }

  ngOnInit(): void {
    this.nonVegItem.getProduct().subscribe(
      response =>{
        this.productNonVeg = response['data'].filter((ele:any) =>{
          if(ele.categoryTitle == 'NON VEG'){ 
  
            return ele;
            
          }
        })
        console.log(this.productNonVeg)
      
     
      }
    )
  }

}
