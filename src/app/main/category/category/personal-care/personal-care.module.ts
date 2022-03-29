import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalCareRoutingModule } from './personal-care-routing.module';
import { PersonalCareComponent } from './personal-care/personal-care.component';


@NgModule({
  declarations: [
    PersonalCareComponent
  ],
  imports: [
    CommonModule,
    PersonalCareRoutingModule
  ]
})
export class PersonalCareModule { }
