import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NonVegRoutingModule } from './non-veg-routing.module';
import { NonVegComponent } from './non-veg/non-veg.component';


@NgModule({
  declarations: [
    NonVegComponent
  ],
  imports: [
    CommonModule,
    NonVegRoutingModule
  ]
})
export class NonVegModule { }
