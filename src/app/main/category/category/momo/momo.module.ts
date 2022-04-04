import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MomoRoutingModule } from './momo-routing.module';
import { MomoComponent } from './momo/momo.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MomoComponent
  ],
  imports: [
    CommonModule,
    MomoRoutingModule,
    SharedModule
  ]
})
export class MomoModule { }
