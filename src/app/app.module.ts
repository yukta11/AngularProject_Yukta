import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxScrollTopModule,
    FormsModule,
    SharedModule
 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
