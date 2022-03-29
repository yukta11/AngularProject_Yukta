import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalCareComponent } from './personal-care/personal-care.component';

const routes: Routes = [
  {
  path:'personalCare',
  component:PersonalCareComponent
  

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalCareRoutingModule { }
