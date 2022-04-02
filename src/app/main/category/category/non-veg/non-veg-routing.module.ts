import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonVegComponent } from './non-veg/non-veg.component';

const routes: Routes = [
  {
    path:'',
    component:NonVegComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NonVegRoutingModule { }
