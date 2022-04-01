// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryList:any;
  

  constructor(private category:CategoryService) { }

  ngOnInit(): void {
    this.category.getCategory().subscribe(
      response=>{
        this.categoryList=response['data'];
        console.log(this.categoryList)

      }
    )

   
   
  }
 
  
 

}


