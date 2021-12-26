import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SecondheaderComponent,
    RightsidebarComponent,
    LeftsidebarComponent,
    FootertopComponent,
    HomepageComponent,
    ContentComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    ServerModule,
    UserModule
  ]
})
export class UicomponentModule { }
