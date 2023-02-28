# LoaderMultipleRequestApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.

## [Mostrar Loader(spinner, loading) para múltiples peticiones HTTP en Angular🤖](https://www.youtube.com/watch?v=VaoRk9nd-0w)
Tomado del canal de youtube **LogiDev**

## [Repositorio del tutorial](https://github.com/jimyhdolores/demo-loader-multiple-request-angular)

## [Cómo crear un Mock Server en Postman con un ejemplo claro](https://www.youtube.com/watch?v=WtT1ZhXNYWU)

## [Cómo agregar delay a una petición en un Mock Server de Postman](https://community.postman.com/t/how-to-delay-response-from-mock-server/11833)

## [Para el loader usamos la librería ngx-ui-loader](https://github.com/t-ho/ngx-ui-loader)
Ejecutamos el siguiente comando para instalarlo:
```
npm i ngx-ui-loader
```
Luego agregaran el módulo NgxUiLoaderModule dentro del modulo principal de su proyecto.
```
@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, NgxUiLoaderModule, HttpClientModule, DemoRequestModule],
	providers: [{ provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }],
	bootstrap: [AppComponent]
})
export class AppModule {}
```

## [Documentación de la librería ngx-ui-loader](https://tdev.app/ngx-ui-loader)
## [Demo de la librería ngx-ui-loader](https://tdev.app/ngx-ui-loader/demo/)