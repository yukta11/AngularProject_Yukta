import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShortCodeComponent } from './short-code/short-code.component';

const routes: Routes = [
  {
    path:'',
    component:ShortCodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShortCodeRoutingModule { }
