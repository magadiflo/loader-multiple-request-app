import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptor implements HttpInterceptor {

  constructor(private _ngxService: NgxUiLoaderService) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Ingresando al interceptor...');
    this._ngxService.start();
    return next.handle(req)
      .pipe(
        finalize(() => this._ngxService.stop()));
  }

}
