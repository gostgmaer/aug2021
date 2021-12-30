import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { ServerModule } from './server/server.module';
import { UicomponentRoutingModule, UIroutingcomponent } from './uicomponent/uicomponent-routing.module';
import { UicomponentModule } from './uicomponent/uicomponent.module';
import { UserModule } from './user/user.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    UserModule,
    UicomponentModule,
    ServerModule,
    UicomponentRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
