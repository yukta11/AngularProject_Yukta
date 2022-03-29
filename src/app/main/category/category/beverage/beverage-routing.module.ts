import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeverageComponent } from './beverage/beverage.component';

const routes: Routes = [
  {
    path:'beverage',
    component:BeverageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeverageRoutingModule { }
