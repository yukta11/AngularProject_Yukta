import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MomoComponent } from './momo/momo.component';

const routes: Routes = [
  {
    path:'',
    component:MomoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MomoRoutingModule { }
