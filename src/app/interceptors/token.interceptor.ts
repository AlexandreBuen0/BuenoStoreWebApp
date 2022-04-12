import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token =  localStorage.getItem('AccessToken');
    var changedReq;

    changedReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      
    return next.handle(changedReq);
  }
}
