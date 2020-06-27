import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[renderAttribute]',
})
export class RendererDirective implements OnInit {

  @Input() renderAttribute;
  constructor(
    private renderer: Renderer2,
    private element: ElementRef,
  ) { }

  ngOnInit() {
    this.renderer.setAttribute(this.element.nativeElement, this.renderAttribute, '');
  }

}
