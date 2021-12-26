import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApisComponent } from './apis/apis.component';
import { APIidComponent } from './apiid/apiid.component';



@NgModule({
  declarations: [
    ApisComponent,
    APIidComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ServerModule { }
