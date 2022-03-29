import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackageFoodRoutingModule } from './package-food-routing.module';

import { PackageFoodComponent } from './package-food/package-food.component';


@NgModule({
  declarations: [
    PackageFoodComponent
  ],
  imports: [
    CommonModule,
    PackageFoodRoutingModule
  ]
})
export class PackageFoodModule { }
