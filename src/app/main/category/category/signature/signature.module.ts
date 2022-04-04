import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignatureRoutingModule } from './signature-routing.module';
import { SignatureComponent } from './signature/signature.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SignatureComponent
  ],
  imports: [
    CommonModule,
    SignatureRoutingModule,SharedModule
  ]
})
export class SignatureModule { }
