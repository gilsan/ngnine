import {
  AfterContentInit,
  ContentChild,
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

import {ModalService} from "../services/modal.service";
import {SubSink} from "subsink";

@Directive({
  selector: '[appModalOpenClose]',
})
export class ModalOpenCloseDirective implements OnInit, OnDestroy {

  private subs = new SubSink();
  elements: HTMLBaseElement[];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private modalService: ModalService,
  ) {}

  @Input()
  set appModalOpenClose(els ) {

      if (els.length) {
         this.elements = els;
      } else {
         this.elements = [els];
      }

      this.elements.forEach( (el) => {
         el.addEventListener('click', this.clickHandler);
       });
  }

  clickHandler = (() => {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef);
  }).bind(this);

  ngOnInit(): void {
   this.subs.sink =  this.modalService.close$
      .subscribe( () => {
         console.log('[directive]');
         this.viewContainer.clear();
      });
  }

  ngOnDestroy(): void {
     this.subs.unsubscribe();
     this.elements.forEach((el) => el.removeEventListener('click', this.clickHandler));
  }


}
