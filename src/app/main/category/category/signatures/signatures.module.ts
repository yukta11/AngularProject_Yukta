import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignaturesRoutingModule } from './signatures-routing.module';
import { SignaturesComponent } from './signatures/signatures.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SignaturesComponent
  ],
  imports: [
    CommonModule,
    SignaturesRoutingModule,
    SharedModule
  ]
})
export class SignaturesModule { }
