import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrozenItemComponent } from './frozen-item/frozen-item.component';

const routes: Routes = [
  {
    path:'',
    component:FrozenItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrozenItemRoutingModule { }
