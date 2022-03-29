import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackageFoodComponent } from './package-food/package-food.component';

const routes: Routes = [
  {
    path:'packageFood',
    component:PackageFoodComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackageFoodRoutingModule { }
