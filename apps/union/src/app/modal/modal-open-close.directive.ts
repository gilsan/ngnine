import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

import { ModalService } from './modal.service';

@Directive({
  selector: '[appModalOpenClose]'
})
export class ModalOpenCloseDirective implements OnInit, OnDestroy {

  els: HTMLBaseElement[];
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.modalService.close$.subscribe(() => {
      this.viewContainer.clear();
    })
  }

  ngOnDestroy() {
     this.els.forEach(el => el.removeEventListener('click', this.handler));
  }

  @Input()
  set appModalOpenClose(els) {

    if (els.length) {
       this.els =els;
    } else {
      this.els = [els];
    }
     
      this.els.forEach( el => {
          el.addEventListener('click', this.handler);
      });
      
  }

  handler=(() =>{
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
  }).bind(this) ;

}
