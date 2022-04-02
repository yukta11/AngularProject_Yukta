import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrozenItemRoutingModule } from './frozen-item-routing.module';
import { FrozenItemComponent } from './frozen-item/frozen-item.component';


@NgModule({
  declarations: [
    FrozenItemComponent
  ],
  imports: [
    CommonModule,
    FrozenItemRoutingModule
  ]
})
export class FrozenItemModule { }
