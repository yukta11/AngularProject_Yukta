import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-frozen-item',
  templateUrl: './frozen-item.component.html',
  styleUrls: ['./frozen-item.component.css']
})
export class FrozenItemComponent implements OnInit {
  productFrozenItem:any

  constructor(private frozenItemType:ProductService) { }

  ngOnInit(): void {
    this.frozenItemType.getProduct().subscribe(response=>
      {
        this.productFrozenItem = response['data'].filter((ele:any)=>
        {
            if(ele.categoryTitle =='FROZEN ITEMS'){
              return ele;
            }

        })
        console.log(this.productFrozenItem)
      })
  }

}
