import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnacksComponent } from './snacks/snacks.component';

const routes: Routes = [
  {
    path:'',
    component:SnacksComponent

    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnacksRoutingModule { }
