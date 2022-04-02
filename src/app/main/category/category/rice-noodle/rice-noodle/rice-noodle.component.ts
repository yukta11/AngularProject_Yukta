import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-rice-noodle',
  templateUrl: './rice-noodle.component.html',
  styleUrls: ['./rice-noodle.component.css']
})
export class RiceNoodleComponent implements OnInit {
  productRiceNoodle:any;

  constructor(private riceNoddleType:ProductService) { }

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

}
