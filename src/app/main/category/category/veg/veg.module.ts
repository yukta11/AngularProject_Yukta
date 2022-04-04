import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VegRoutingModule } from './veg-routing.module';
import { VegComponent } from './veg/veg.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    VegComponent
  ],
  imports: [
    CommonModule,
    VegRoutingModule, 
    SharedModule
  ]
})
export class VegModule { }
