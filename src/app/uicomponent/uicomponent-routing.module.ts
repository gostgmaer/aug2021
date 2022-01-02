import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SecondheaderComponent } from './secondheader/secondheader.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { FootertopComponent } from './footertop/footertop.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServerModule } from '../server/server.module';
import { UserModule } from '../user/user.module';
import { ContentComponent } from './content/content.component';
import { BlogComponent } from './blog/blog.component';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'blog', component:BlogComponent},
 /*  { path: '', redirectTo: '/home', pathMatch: 'full' }, */
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  UserModule],
  exports: [RouterModule,]
})
export class UicomponentRoutingModule { }
export const UIroutingcomponent ={LandingComponent,HomepageComponent,BlogComponent}
