import { Component, Input } from '@angular/core';

import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { ISpaceVideo } from '../space-videos.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent {
  private theVideo: ISpaceVideo | undefined;
  videoUrl: SafeUrl | undefined;
  constructor(
    private domSanitizer: DomSanitizer,
  ) { }
  // Create a trusted version of the video URL each time
  // the input video changes.
  //
  @Input() set video(value: ISpaceVideo | undefined) {
    // console.log('[video-player][23][Input]', value);
    this.theVideo = value;
    if (value && value.videoUrl) {
      this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(value.videoUrl);
    }
  }

  get video() { return this.theVideo; }
}
