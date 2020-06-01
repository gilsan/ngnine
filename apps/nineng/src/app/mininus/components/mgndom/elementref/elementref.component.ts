import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-elementref',
  templateUrl: './elementref.component.html',
  styleUrls: ['./elementref.component.scss']
})
export class ElementrefComponent implements OnInit, AfterViewInit {

  @ViewChild('tref', {read: ElementRef}) tref: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log(this.tref.nativeElement.textContent);
  }

}
