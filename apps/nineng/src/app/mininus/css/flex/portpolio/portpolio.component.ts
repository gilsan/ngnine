// sofia profile internal restart reloadxml
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';


@Component({
  selector: 'app-portpolio',
  templateUrl: './portpolio.component.html',
  styleUrls: ['./portpolio.component.scss']
})
export class PortpolioComponent implements OnInit, AfterViewInit {

  showlinks = false;
  constructor() { }


  @ViewChild('header') header: ElementRef;
  ngOnInit(): void {
    const scroll = fromEvent(window, 'scroll');
    scroll.subscribe(data => {
      console.log(data);
    })
  }

  ngAfterViewInit() {
    console.log(this.header);
  }

  linksToggle() {
    console.log('linksToggle()');
    this.showlinks = !this.showlinks;
  }

  showLinks() {
    if (this.showlinks) {
      return { "show__links": true };
    }
    return { "show__links": false };
  }

}
