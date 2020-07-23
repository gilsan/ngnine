import { Component, Input } from '@angular/core';

import { ISpaceVideo } from '../space-videos.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss'],
})
export class VideoThumbnailComponent {
  @Input() video: ISpaceVideo | undefined;

}
