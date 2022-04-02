import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignatureRoutingModule } from './signature-routing.module';
import { SignatureComponent } from './signature/signature.component';


@NgModule({
  declarations: [
    SignatureComponent
  ],
  imports: [
    CommonModule,
    SignatureRoutingModule
  ]
})
export class SignatureModule { }
