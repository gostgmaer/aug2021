import { Component, NgModule, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(

  ): void {
  }

  twitter() {
    console.log('Twitter Working Fine')
  }
  fb() {
    console.log('Facebook Click Working as Expected')
  }
  googlemail() {
    console.log('Gmail Working FIne')
  }
  linkined() {
    console.log('LinkedIn Working Fine')
  }
  github() {
    console.log('Github Click Working')
  }
  insta() {
    console.log('Instagram Click Working')
  }
  homeclick(){
    console.log('HomePage Click WOrking')
  }

}

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  exports: [],
  providers: [],
})
export class FeatureModule {}
