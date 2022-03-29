import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaQComponent } from './fa-q/fa-q.component';

const routes: Routes = [
  {
    path:'',
    component:FaQComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaQRoutingModule { }
