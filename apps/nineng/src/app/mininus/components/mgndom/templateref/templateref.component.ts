import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-templateref',
  templateUrl: './templateref.component.html',
  styleUrls: ['./templateref.component.scss']
})
export class TemplaterefComponent implements OnInit,AfterViewInit {

  @ViewChild('tpl') tpl: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    let elementRef = this.tpl.elementRef;
    console.log('ng-template: ', elementRef.nativeElement.textContent);
    
  }

}
