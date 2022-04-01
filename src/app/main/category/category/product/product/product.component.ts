import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product:any
  test:any
 

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(
      respone =>{
        this.product = respone['data']
    
       
      }
    )
  }

}
