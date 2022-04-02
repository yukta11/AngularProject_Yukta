import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-veg',
  templateUrl: './veg.component.html',
  styleUrls: ['./veg.component.css']
})
export class VegComponent implements OnInit {
  productVeg:any

  constructor(private vegType:ProductService) { }

  ngOnInit(): void {
    this.vegType.getProduct().subscribe(
      response =>{
        this.productVeg = response['data'].filter((ele:any) =>{
          if(ele.categoryTitle == 'SNACKS'){ 
  
            return ele;
            
          }
        })
        console.log(this.productVeg)
      
     
      }
    )
  }

}
