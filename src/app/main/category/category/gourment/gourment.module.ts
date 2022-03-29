import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GourmentRoutingModule } from './gourment-routing.module';
import { GourmentComponent } from './gourment/gourment.component';


@NgModule({
  declarations: [
    GourmentComponent
  ],
  imports: [
    CommonModule,
    GourmentRoutingModule
  ]
})
export class GourmentModule { }
