import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NonVegRoutingModule } from './non-veg-routing.module';
import { NonVegComponent } from './non-veg/non-veg.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    NonVegComponent
  ],
  imports: [
    CommonModule,
    NonVegRoutingModule,
    SharedModule
  ]
})
export class NonVegModule { }
