import { Directive, ViewContainerRef, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[bubble]',
})
export class BubbleDirective implements OnInit {

  constructor(
    public viewContainerRef: ViewContainerRef,
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  ngOnInit() {
    setInterval(() => this.bubble(), 50);
  }

  bubble() {
    const size: number = Math.random() * 60;
    const width: string = size + 'px';
    const height: string = size + 'px';
    const innerWidth: number = window.innerWidth;
    const left: string = Math.random() * innerWidth + 'px';
    const span = this.renderer.createElement('span');

    this.renderer.appendChild(this.el.nativeElement, span);

    this.renderer.setStyle(span, 'width', width);
    this.renderer.setStyle(span, 'height', height);
    this.renderer.setStyle(span, 'left', left);

    setTimeout(() => {
      this.renderer.removeChild(this.el.nativeElement, span);
    }, 4000);
  }

}
