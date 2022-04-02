import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MomoRoutingModule } from './momo-routing.module';
import { MomoComponent } from './momo/momo.component';


@NgModule({
  declarations: [
    MomoComponent
  ],
  imports: [
    CommonModule,
    MomoRoutingModule
  ]
})
export class MomoModule { }
