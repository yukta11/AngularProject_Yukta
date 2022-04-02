import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnacksRoutingModule } from './snacks-routing.module';
import { SnacksComponent } from './snacks/snacks.component';


@NgModule({
  declarations: [
    SnacksComponent
  ],
  imports: [
    CommonModule,
    SnacksRoutingModule
  ]
})
export class SnacksModule { }
