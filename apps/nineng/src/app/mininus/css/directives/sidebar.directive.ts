import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[sideBar]',
    exportAs: 'sidebar'
})
export class SideBarDirective  {

    @Input('sideBar')
     isShow = false;

     @HostBinding('className') 
      get cssClass() {
          if (this.isShow) {
              return 'nav nav--show';
          }
          return 'nav';   
     }


}