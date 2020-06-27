import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-elementref',
  templateUrl: './elementref.component.html',
  styleUrls: ['./elementref.component.scss'],
  styles: [
    '[highlight] {color: blue; font-size: 20px;margin-top:50px; font-weight: 700;}',
    '[light] {color: white; font-size: 20px;margin-top:80px; font-weight: 700;}',
    '[hong] {color: red; font-size: 20px;margin-top:50px; font-weight: 700;}',
  ],
})
export class ElementrefComponent implements OnInit, AfterViewInit {

  @ViewChild('tref', { read: ElementRef }) tref: ElementRef;
  @ViewChild('el') span: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // console.log(this.tref.nativeElement.textContent);
    this.span.nativeElement.setAttribute('highlight', '{color: red}');
  }

}

/*

1. Modifying DOM element properties
classList.add()
setAttribute()
style.setProperty()

2. Modifying DOM hierarchy
createElement()
Remove()
appendChild()
removeChild()


 순서
 Use @ViewChild query and template reference to get HTML element
 <span #el>I want to be green</span>
 .....
 @ViewChild('el') span: ElementRef;

 Use 'setAttribute' method of a native DOM element to add an attribute
 this.span.nativeElement.setAttribute('highlight', '')

 Directive 순서
 Add input paramate to the directive
  export class AddAttibuteDirecitve implements OnInit {
    @Input() addAttribute;
  }

Inject an ElementRef into a constructor
 constructor(private element: ElementRef) {}


 Use `setAttribute` method to add an attribute in NgOninit lifecycle hook

 Apply the directive to the 'span` element
 template: `<span [addAttribute]="'light'">....</span>

 Render2
 DOM element modification methods

  setAttribute
  removeAttribute
  addClass
  removeClass
  setStyle
  remvoeStyle

  Inject ElementRef & Renderer2 into a constructor of a directive
    @Input()
    constructor(private renderer: Renderer2) {}

  Use `setAttribute` method of the Renderer to add an attribute

  remderer.setAttribute(this.element.navtiveElement, attribute, value)

*/
