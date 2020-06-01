import { Component, OnInit , HostListener, Inject} from '@angular/core';

import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../services/window.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window   
  ) { }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    console.log('[Scroll]',offset);
  }


  ngOnInit(): void {
  }

}
