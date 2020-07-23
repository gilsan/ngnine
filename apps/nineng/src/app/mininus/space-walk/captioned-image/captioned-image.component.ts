import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'captioned-image',
  templateUrl: './captioned-image.component.html',
  styleUrls: ['./captioned-image.component.scss'],
})
export class CaptionedImageComponent {

  @Input() src?: string;
  @Input() caption?: string;

  constructor() { }
}
