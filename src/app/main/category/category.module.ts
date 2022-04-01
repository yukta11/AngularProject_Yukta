import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category/category.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    HttpClientModule,
    
  ]
})
export class CategoryModule { }
