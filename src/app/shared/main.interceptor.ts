import { Injectable } from '@angular/core';
import { AuthService } from '../Services/auth.service';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MainInterceptor implements HttpInterceptor {


  constructor(private user:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const Authorization = this.user.getToken();
    if(Authorization){
      request = request.clone({
        setHeaders:{"Authorization":`Bearer ${Authorization}`,"Warehouse-Id":"1", "Api-Key":"q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6"}
  
      })
    }
    else{
      request = request.clone({
        setHeaders:{"Warehouse-Id":"1", "Api-Key":"q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6"}
  
      })
    }
   
    
    return next.handle(request);
  }
}
