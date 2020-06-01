import { Directive, HostBinding, HostListener, EventEmitter, Output } from '@angular/core';


@Directive({
   selector: '[mousehover]'
})
export class MenuHoverDirective {
   @Output()
   mouseStatus = new EventEmitter();

   @HostListener('mouseover', ['$event'])
   mouseOver($event) {
    //  console.log($event);
      this.mouseStatus.emit('mouseover');
   }

   @HostListener('mouseleave', ['$event'])
   mouseLeave($event) {
      this.mouseStatus.emit('mouseleave');
   }
    
}