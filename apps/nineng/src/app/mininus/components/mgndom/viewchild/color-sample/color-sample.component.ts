import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-colorsample',
  templateUrl: './color-sample.component.html',
  styleUrls: ['./color-sample.component.scss'],
})
export class ColorSampleComponent {


  @Input() color: string;


  constructor(

  ) { }

}
