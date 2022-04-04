import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiceNoodleRoutingModule } from './rice-noodle-routing.module';
import { RiceNoodleComponent } from './rice-noodle/rice-noodle.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RiceNoodleComponent
  ],
  imports: [
    CommonModule,
    RiceNoodleRoutingModule,
    SharedModule
  ]
})
export class RiceNoodleModule { }
