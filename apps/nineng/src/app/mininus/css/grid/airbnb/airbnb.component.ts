import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-airbnb',
  templateUrl: './airbnb.component.html',
  styleUrls: ['./airbnb.component.scss']
})
export class AirbnbComponent implements OnInit {

  footer = false;
  constructor(
    private renderer: Renderer2
  ) { }

  @ViewChild('searchform') elRf: ElementRef;

  ngOnInit(): void {
  }

  showFooter() {
   // console.log(this.footer);
      if (this.footer) {
        return {'bottom': '0'};
      }
      return {'bottom': '-100%'};
  }

  toggle() {
    this.footer = !this.footer;
  //  console.log('[][][toggle]', this.footer);
  }

  changeClass() {
    this.renderer.setStyle(this.elRf.nativeElement, 'color', 'blue');
    //  this.elRf.nativeElement.className == 'active' ?
    //    this.efRf.nativeElement.className =
  }

}
