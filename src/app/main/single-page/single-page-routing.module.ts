import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePageComponent } from './single-page/single-page.component';

const routes: Routes = [
  {
    path:'singlePage/:id',
    component:SinglePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SinglePageRoutingModule { }
