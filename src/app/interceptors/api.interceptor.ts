import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptor implements HttpInterceptor {

  private _activateRequest: number = 0;

  constructor(private _ngxService: NgxUiLoaderService) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Ingresando al interceptor...');

    /**
     * * Iniciando loader
     * * ****************
     * * Viene la primera petición, y como el valor de la variable al iniciar siempre es cero,
     * * entonces se lanza el loader con .start(). Luego, si vienera otra petición ya no entraría
     * * en el if ya que el valor de la variable cambió a 1 y con esta nueva petición cambiaría a 2
     * * y así sucesivamente.
     * *
     * * Finalizando loader
     * * ******************
     * * Cada que finaliza una petición llamamos a nuestro método _stopLoader() y disminuimos
     * * el valor de la variable, cuando nuestra variable llegue a cero, se aplicará el .stop()
     * * para detener al loader.
     * *
     * * Recordar:
     * * *********
     * * Por cada petición relaizada, siempre va a tener su correspondiente finalización.
     * *
     */

    if (this._activateRequest === 0) {
      this._ngxService.start();
    }
    this._activateRequest++;

    /**
     * * Con el pipe y método finalize() se determina el momento en que
     * * la petición ha finalizado
     */
    return next.handle(req)
      .pipe(
        finalize(() => this._stopLoader()));
  }

  private _stopLoader() {
    this._activateRequest--;
    if (this._activateRequest === 0) {
      this._ngxService.stop();
    }
  }

}
