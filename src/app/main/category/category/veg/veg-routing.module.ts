import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VegComponent } from './veg/veg.component';

const routes: Routes = [
  {
    path:'',
    component:VegComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VegRoutingModule { }
