import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { DemoRequestModule } from './demo-request/demo-request.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DemoRequestModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
