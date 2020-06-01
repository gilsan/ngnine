import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appExample]'
})
export class ExampleDirective implements OnInit {

  @Input() appColor: string;
  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
     this.el.nativeElement.style.backgroundColor = this.appColor;
     this.el.nativeElement.style.color = 'white';
     this.el.nativeElement.style.fontSize= '1.5rem';
  }

}
