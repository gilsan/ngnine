import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ISpaceVideo, SpaceVideosService } from '../space-videos.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-ex-video-viewer',
  templateUrl: './ex-video-viewer.component.html',
  styleUrls: ['./ex-video-viewer.component.scss']
})
export class ExVideoViewerComponent implements OnInit {
  static label = '영화';

  currentVideo: ISpaceVideo | undefined;

  videosObservable: Observable<ISpaceVideo[]> | undefined;
  constructor(
    private service: SpaceVideosService,
  ) { }

  ngOnInit(): void {
    this.videosObservable = this.service.load('misc');
  }

  setCurrentVideo(v: ISpaceVideo) {
    // console.log('[ex-video][27][setCurrentVideo]', v);
    this.currentVideo = v;
  }

}
