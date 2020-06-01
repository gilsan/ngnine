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

import {ModalsService} from "../../services/modals.service";
import {SubSink} from "subsink";

@Directive({
    selector: '[closeOpenModal]'
  })
  export class CloseOpenModalDirective implements OnInit, OnDestroy{
  
    private subs = new SubSink();
    elements: HTMLBaseElement[];
    
    constructor(
      private templateRef: TemplateRef<any>,
      private viewContainer: ViewContainerRef,
      private modalService: ModalsService,
    ) {}
  
    @Input()
    set closeOpenModal(els) {
  
        if (els.length) {
           this.elements = els;
        } else {
           this.elements = [els];
        }
  
        this.elements.forEach( (el) => {
           el.addEventListener("click", this.clickHandler);
         });
    }
  
    clickHandler = ( () => {
      console.log("[templateRef]");
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.modalService.openAvailability();
    }).bind(this);
  
    ngOnInit(): void {
     this.subs.sink =  this.modalService.close$
        .subscribe( () => {
           console.log("[52][directive]");
           this.viewContainer.clear();
        });
    }
  
    ngOnDestroy(): void {
       this.subs.unsubscribe();
       this.elements.forEach( (el) => el.removeEventListener("click", this.clickHandler));
    }

  }
