import { Directive, ElementRef, Host, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight],[appHighlighted],[highlighted]',
  outputs:  ["appHighlight","appHighlighted", "highlighted"]
})
export class HighlightedDirective {

  @Input('highlighted')
    isHighlighted = true;

  constructor(
    private el: ElementRef
  ) {}

   @Input('appHighlight') highlightColor: string;
   @Input('appHighlighted') highlightedColor: string; 

   @HostListener('mouseenter') onMouseEnter() {
     this.highlight(this.highlightColor );
   }
 
   @HostListener('mouseleave') onMouseLeave() {
     this.highlighted(this.highlightedColor);
   }
 
   private highlight(color: string) {
     this.el.nativeElement.style.backgroundColor = color;
   }

   private highlighted(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
   }



  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }

  @HostListener('mouseover')
  mouseOver() {
    this.isHighlighted = true;
   
  }

  @HostListener('mouseleave') 
  mouseLeave() {
    this.isHighlighted = false;
  
  }
 

}
