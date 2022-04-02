import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DalleMomoRoutingModule } from './dalle-momo-routing.module';
import { DalleMomoComponent } from './dalle-momo/dalle-momo.component';


@NgModule({
  declarations: [
    DalleMomoComponent
  ],
  imports: [
    CommonModule,
    DalleMomoRoutingModule
  ]
})
export class DalleMomoModule { }
