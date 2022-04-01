import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  category:any 
  subCategory:any
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(response => {
      this.category = response['data'];
      // console.log(this.category)
      this.subCategory=this.category[0].subcategories.data[0].title;
    
      
     
     
    });
  }

}
