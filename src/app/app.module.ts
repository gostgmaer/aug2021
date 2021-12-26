import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerModule } from './server/server.module';
import { UicomponentModule } from './uicomponent/uicomponent.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    UicomponentModule,
    ServerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
