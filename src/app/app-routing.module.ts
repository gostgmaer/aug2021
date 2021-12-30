import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServerModule } from './server/server.module';
import { UicomponentModule } from './uicomponent/uicomponent.module';
import { UserModule } from './user/user.module';
import { LandingComponent } from './uicomponent/landing/landing.component';
import { LoginComponent } from './user/login/login.component';
import { NotFoundComponent } from './uicomponent/not-found/not-found.component';
import { UicomponentRoutingModule,UIroutingcomponent } from './uicomponent/uicomponent-routing.module';





const routes: Routes =  [

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    UserModule,
    UicomponentModule,

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


