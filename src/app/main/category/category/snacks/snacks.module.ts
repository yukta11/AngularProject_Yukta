import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnacksRoutingModule } from './snacks-routing.module';
import { SnacksComponent } from './snacks/snacks.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SnacksComponent
  ],
  imports: [
    CommonModule,
    SnacksRoutingModule,
    SharedModule
  ]
})
export class SnacksModule { }
