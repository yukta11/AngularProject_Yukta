import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VegRoutingModule } from './veg-routing.module';
import { VegComponent } from './veg/veg.component';


@NgModule({
  declarations: [
    VegComponent
  ],
  imports: [
    CommonModule,
    VegRoutingModule
  ]
})
export class VegModule { }
