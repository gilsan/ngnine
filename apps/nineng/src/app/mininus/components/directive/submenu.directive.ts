import { Directive, ElementRef, EventEmitter, HostListener, Output, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngnineSubmenu]',
  exportAs: 'submenu'
})
export class SubmenuDirective {

  @Output() statusMouse = new EventEmitter()
  constructor(
    private el: ElementRef,
    // private templateRef: TemplateRef<any>,
    // private vieContainer: ViewContainerRef,
  ) { }


  @HostListener('mouseenter')
   onMouseenter() {   
     this.statusMouse.emit('enter');
   }

   @HostListener('mouseleave')
   onMouseleave() {  
     this.statusMouse.emit('leave');
   }

}
