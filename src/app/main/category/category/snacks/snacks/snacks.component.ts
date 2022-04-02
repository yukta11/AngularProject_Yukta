import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})
export class SnacksComponent implements OnInit {
  productSnacks:any;

  constructor(private SnacksType:ProductService) { }

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

}
