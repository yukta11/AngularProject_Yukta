import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrozenItemRoutingModule } from './frozen-item-routing.module';
import { FrozenItemComponent } from './frozen-item/frozen-item.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FrozenItemComponent
  ],
  imports: [
    CommonModule,
    FrozenItemRoutingModule,
    SharedModule

  ]
})
export class FrozenItemModule { }
