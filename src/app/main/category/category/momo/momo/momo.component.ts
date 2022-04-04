import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-momo',
  templateUrl: './momo.component.html',
  styleUrls: ['./momo.component.css']
})
export class MomoComponent implements OnInit {
  productMomo:any;
  totalItems: any;
  page: number = 1

  constructor(private momoType:ProductService) { }

  ngOnInit(): void {
    this.momoType.getProduct().subscribe(response=>
      {
        this.productMomo = response['data'].filter((ele:any)=>
        {
            if(ele.categoryTitle =='MOMO'){
              return ele;
            }

        })
        console.log(this.productMomo)
      })
  }

}
