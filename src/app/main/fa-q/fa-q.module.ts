import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaQRoutingModule } from './fa-q-routing.module';
import { FaQComponent } from './fa-q/fa-q.component';


@NgModule({
  declarations: [
    FaQComponent
  ],
  imports: [
    CommonModule,
    FaQRoutingModule
  ]
})
export class FaQModule { }
