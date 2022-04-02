import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DalleMomoComponent } from './dalle-momo/dalle-momo.component';

const routes: Routes = [
  {
    path:'',
    component:DalleMomoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DalleMomoRoutingModule { }
