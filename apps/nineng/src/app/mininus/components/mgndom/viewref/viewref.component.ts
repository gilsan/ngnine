import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewref',
  templateUrl: './viewref.component.html',
  styleUrls: ['./viewref.component.scss']
})
export class ViewrefComponent implements OnInit, AfterViewInit {

  @ViewChild('tpl') tpl: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }
/**
 * Embedded Views which are linked to a Template
 * ngAfterViewInit() {
  *  let view = this.tpl.createEmbeddedView(null);
 * }
 * 
 * Host Views which are linked to a Component
 * 
 * constructor(private injector: Injector,
            private r: ComponentFactoryResolver) {
    let factory = this.r.resolveComponentFactory(ColorComponent);
    let componentRef = factory.create(injector);
    let view = componentRef.hostView;
* }
 * 
 * 
 */
  ngAfterViewInit() {
     let view = this.tpl.createEmbeddedView(null);
  }

}
