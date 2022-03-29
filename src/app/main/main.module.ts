import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';








@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
 
 
   
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
 
   
   
  ]
})
export class MainModule { }
