import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { MainInterceptor } from './shared/main.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxScrollTopModule,
    FormsModule,
    SharedModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
 
   
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:MainInterceptor,multi:true,
    
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
