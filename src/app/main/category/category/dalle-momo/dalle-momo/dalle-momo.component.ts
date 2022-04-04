import { Component, OnInit } from '@angular/core';
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

  constructor(private dalleMomoType:ProductService) { }

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


}
