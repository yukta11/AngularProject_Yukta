import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GourmentComponent } from './gourment/gourment.component';

const routes: Routes = [
  {
    path:'gourmet',
    component:GourmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GourmentRoutingModule { }
