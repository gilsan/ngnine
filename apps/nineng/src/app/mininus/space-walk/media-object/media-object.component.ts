import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'media-object',
  templateUrl: './media-object.component.html',
  styleUrls: ['./media-object.component.scss'],
})
export class MediaObjectComponent {

  @Input() header?: string;
  @Input() image?: string;
  @Input() description?: string;

  constructor() { }
}
