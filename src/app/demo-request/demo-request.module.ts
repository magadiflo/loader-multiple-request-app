import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRequestComponent } from './demo-request.component';



@NgModule({
  declarations: [
    DemoRequestComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DemoRequestComponent,
  ]
})
export class DemoRequestModule { }
