import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {
    path:'',
    component:CategoryComponent,
    loadChildren:()=>import('./category/grocery/grocery.module').then(m=>m.GroceryModule)
  },
  {
    path:'',
    component:CategoryComponent,
    loadChildren:()=>import('./category/personal-care/personal-care.module').then(m=>m.PersonalCareModule)
  },
  {
    path:'',
    component:CategoryComponent,
    loadChildren:()=>import('./category/product/product.module').then(m=>m.ProductModule)
  },
  {
    path:'',
    component:CategoryComponent,
    loadChildren:()=>import('./category/package-food/package-food.module').then(m=>m.PackageFoodModule)
  },
  {
    path:'',
    component:CategoryComponent,
    loadChildren:()=>import('./category/gourment/gourment.module').then(m=>m.GourmentModule)
  },
  {
    path:'',
    component:CategoryComponent,
    loadChildren:()=>import('./category/beverage/beverage.module').then(m=>m.BeverageModule)
  },
  {
    path:'',
    component:CategoryComponent,
    loadChildren:()=>import('./category/household/household.module').then(m=>m.HouseholdModule)
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
