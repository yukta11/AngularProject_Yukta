import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-signatures',
  templateUrl: './signatures.component.html',
  styleUrls: ['./signatures.component.css']
})
export class SignaturesComponent implements OnInit {
  totalItems: any;
  page: number = 1

  constructor(private signatureType:ProductService) { }
  productSignatures:any

  ngOnInit(): void {
    this.signatureType.getProduct().subscribe(
      response =>{
        this.productSignatures = response['data'].filter((ele:any) =>{
          if(ele.categoryTitle == 'SIGNATURES'){ 
  
            return ele;
            
          }
        })
      
     
      }
    )
  }

}
