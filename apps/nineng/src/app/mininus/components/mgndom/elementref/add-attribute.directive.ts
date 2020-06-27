import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[addAttribute]',
})
export class AddAttributeDirective implements OnInit {

  @Input() addAttribute;
  constructor(
    private element: ElementRef,
  ) { }

  ngOnInit() {
    this.element.nativeElement.setAttribute(this.addAttribute, '');
  }

}
