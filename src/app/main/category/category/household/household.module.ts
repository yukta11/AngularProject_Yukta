import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HouseholdRoutingModule } from './household-routing.module';
import { HouseholdComponent } from './household/household.component';


@NgModule({
  declarations: [
    HouseholdComponent
  ],
  imports: [
    CommonModule,
    HouseholdRoutingModule
  ]
})
export class HouseholdModule { }
