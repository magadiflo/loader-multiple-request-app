# LoaderMultipleRequestApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.

## [Mostrar Loader(spinner, loading) para m煤ltiples peticiones HTTP en Angular馃](https://www.youtube.com/watch?v=VaoRk9nd-0w)
Tomado del canal de youtube **LogiDev**

## [Repositorio del tutorial](https://github.com/jimyhdolores/demo-loader-multiple-request-angular)

## [C贸mo crear un Mock Server en Postman con un ejemplo claro](https://www.youtube.com/watch?v=WtT1ZhXNYWU)

## [C贸mo agregar delay a una petici贸n en un Mock Server de Postman](https://community.postman.com/t/how-to-delay-response-from-mock-server/11833)

## [Para el loader usamos la librer铆a ngx-ui-loader](https://github.com/t-ho/ngx-ui-loader)
Ejecutamos el siguiente comando para instalarlo:
```
npm i ngx-ui-loader
```
Luego agregaran el m贸dulo NgxUiLoaderModule dentro del modulo principal de su proyecto.
```
@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, NgxUiLoaderModule, HttpClientModule, DemoRequestModule],
	providers: [{ provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }],
	bootstrap: [AppComponent]
})
export class AppModule {}
```

## [Documentaci贸n de la librer铆a ngx-ui-loader](https://tdev.app/ngx-ui-loader)
## [Demo de la librer铆a ngx-ui-loader](https://tdev.app/ngx-ui-loader/demo/)