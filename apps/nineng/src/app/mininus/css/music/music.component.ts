import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimeoutError, fromEvent } from 'rxjs';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  sideMenu = false;
  windowSize = 0;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    const user = window.navigator.userAgent;
   // console.log('[][][]',user);
     fromEvent(window, 'resize')
     .subscribe(()=> {
      this.windowSize = window.innerWidth;
     })
   
    
  }

  goHome() {
    this.router.navigate(['/mininus']);
  }

 toggle() {
   this.sideMenu = !this.sideMenu;
 }

 controlSideBar() {
  if (this.windowSize > 768) {
    if(this.sideMenu) {
      return { "sidebar": true};
    } else if(!this.sideMenu) {
      return { "sidebar_hide": true }
    }
  } else if (this.windowSize < 768 ) {
     return { "sidebar": true};
  }

 }

 controlMain() {
    if(this.sideMenu) {
      return { "main_content": true};
    } else if(!this.sideMenu) {
      return { "main-content_all": true }
    }
 }

}
