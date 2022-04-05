import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
