import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DalleMomoRoutingModule } from './dalle-momo-routing.module';
import { DalleMomoComponent } from './dalle-momo/dalle-momo.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DalleMomoComponent
  ],
  imports: [
    CommonModule,
    DalleMomoRoutingModule,
    SharedModule
  ]
})
export class DalleMomoModule { }
