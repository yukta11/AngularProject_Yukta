
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {
    path:'',
    component:CategoryComponent,
    children:[
      {
         path:'product',
        loadChildren:()=>import('./category/product/product.module').then(m=>m.ProductModule)
      },
      {
        path:'SNACKS',
        loadChildren:()=>import('./category/snacks/snacks.module').then(m=>m.SnacksModule)
      },
      {
        path:'SIGNATURES',
        loadChildren:()=>import('./category/signatures/signatures.module').then(m=>m.SignaturesModule)
      },
      {
        path:'DALLE MOMOS',
        loadChildren:()=>import('./category/dalle-momo/dalle-momo.module').then(m=>m.DalleMomoModule)
      },
      {
        path:'RICE AND NOODLES',
        loadChildren:()=>import('./category/rice-noodle/rice-noodle.module').then(m=>m.RiceNoodleModule)
      },
      {
        path:'FROZEN ITEMS',
        loadChildren:()=>import('./category/frozen-item/frozen-item.module').then(m=>m.FrozenItemModule)
      },
      {
        path:'MOMO',
        loadChildren:()=>import('./category/momo/momo.module').then(m=>m.MomoModule)
      },
      {
        path:'SIGNATURE',
        loadChildren:()=>import('./category/signature/signature.module').then(m=>m.SignatureModule)
      },
      {
        path:'NON VEG',
        loadChildren:()=>import('./category/non-veg/non-veg.module').then(m=>m.NonVegModule)
      },
      {
        path:'VEG',
        loadChildren:()=>import('./category/veg/veg.module').then(m=>m.VegModule)
      }
     
    
    ]

  }
]
 


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
