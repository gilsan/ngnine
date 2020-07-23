import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ISpaceVideo } from '../space-videos.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent {

  @Input() videoData: ISpaceVideo[] | undefined;
  @Output() selectVideo = new EventEmitter<ISpaceVideo>();

  currentVideo: ISpaceVideo | undefined;

  setCurrentVideo(video: ISpaceVideo) {

    this.currentVideo = video;
    this.selectVideo.emit(video);
  }
}
