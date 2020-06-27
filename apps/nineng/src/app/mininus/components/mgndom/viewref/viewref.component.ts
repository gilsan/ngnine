import {
  AfterViewChecked, AfterViewInit, Component,
  ComponentRef, ElementRef, OnInit,
  QueryList, TemplateRef, ViewChild, ViewChildren, ViewContainerRef,
} from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-viewref',
  templateUrl: './viewref.component.html',
  styleUrls: ['./viewref.component.scss']
})
export class ViewrefComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @ViewChildren('c', { read: ElementRef }) childComps: QueryList<ElementRef>;
  @ViewChild('vc', { read: ViewContainerRef }) viewContainer: ViewContainerRef;
  @ViewChild('t') template: TemplateRef<null>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.viewContainer.createEmbeddedView(this.template);
    //  this.viewContainer.createComponent(this.childComps[0]);
  }

  ngAfterViewChecked() {
    //  console.log(' number of child components: ', this.childComps.length);
  }

  remove() {
    this.viewContainer.remove();
  }

  create() {
    this.remove();
    this.viewContainer.createEmbeddedView(this.template);
  }



}

/*
순서
1. Wrap DOM noodes into 'ng-template' tag
2. Query the template using ViewChild/ViewChildren query
3. Initialize a View Conatiner using { read: ViewContainerRef } parmameter
4. Use 'createEmbeddedView' method to create and render a view from a tempate
5. Check the view is created and the compoent is rendered
6. Remove the view when clicked on a button using 'remove' method of a View Container
7. Verify that the child components length is 0
*/

/*
  Embedded Views which are linked to a Template
  ngAfterViewInit() {
  let view = this.tpl.createEmbeddedView(null);
  }


 */
