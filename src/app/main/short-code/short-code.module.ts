import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortCodeRoutingModule } from './short-code-routing.module';
import { ShortCodeComponent } from './short-code/short-code.component';


@NgModule({
  declarations: [
    ShortCodeComponent
  ],
  imports: [
    CommonModule,
    ShortCodeRoutingModule
  ]
})
export class ShortCodeModule { }
