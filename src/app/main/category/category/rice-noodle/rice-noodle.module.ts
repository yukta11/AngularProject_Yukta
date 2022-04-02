import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiceNoodleRoutingModule } from './rice-noodle-routing.module';
import { RiceNoodleComponent } from './rice-noodle/rice-noodle.component';


@NgModule({
  declarations: [
    RiceNoodleComponent
  ],
  imports: [
    CommonModule,
    RiceNoodleRoutingModule
  ]
})
export class RiceNoodleModule { }
