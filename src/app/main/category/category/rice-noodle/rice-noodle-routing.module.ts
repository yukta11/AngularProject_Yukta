import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RiceNoodleComponent } from './rice-noodle/rice-noodle.component';

const routes: Routes = [
  {
    path:'',
    component:RiceNoodleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiceNoodleRoutingModule { }
