import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onheadhomeclick(){
    console.log('Home Page Click Event Working')
  }
  onheadaboutclick(){
    console.log('About Click Event Working')
  }
  onheadcontentclick(){
    console.log('Content Click Event Working')
  }
  onheadlogin(){
    console.log('Header Login Click Event Working')
  }
  onheaduser(){
    console.log('Header Signup Click Event Working')
  }

}

