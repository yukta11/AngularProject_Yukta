import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements OnInit {
  totalItems: any;
  page: number = 1

  productSignature:any;

  constructor(private signatureType:ProductService) { }

  ngOnInit(): void {
    this.signatureType.getProduct().subscribe(response=>
      {
        this.productSignature = response['data'].filter((ele:any)=>
        {
            if(ele.categoryTitle =='SIGNATURE'){
              return ele;
            }

        })
        console.log(this.productSignature)
      })
  }

}
