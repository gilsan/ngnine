import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[header]'
})
export class HeaderDrective implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    console.log(this.elementRef);
  }

  @HostListener("document:scroll")
  onScroll() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      console.log('scroll....')
    } else {
      console.log('not scroll.....');
    }
  }

  @HostListener("click") onclick() {
    console.log('click....');
  }
}