import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { VideoDialogComponent } from './video-dialog/video-dialog.component';

// import { overlayConfigFactory } from 'ngx-modialog';
// import { Modal } from 'ngx-modialog/plugins/bootstrap';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit, OnChanges {

  private youtubeurlPrefix = '//www.youtube.com/embed/';
  @Input() videos: Array<string>;
  @Output() playbackStarted: EventEmitter<any> = new EventEmitter<any>();
  @Output() playbackEnded: EventEmitter<any> = new EventEmitter<any>();

  // tslint:disable-next-line:array-type
  safeVideoUrls: Array<SafeResourceUrl>;
  constructor(
    private sanitizer: DomSanitizer,
    public dialog: MatDialog,
    //  private modal: Modal
  ) { }

  ngOnInit() {

  }

  ngOnChanges() {
    // tslint:disable-next-line:max-line-length
    this.safeVideoUrls = this.videos ? this.videos.map(v => this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeurlPrefix + v)) : this.videos;
  }

  playVideo(videoId: string) {
    this.playbackStarted.emit(null);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { videoId },
      dialogConfig.width = '600px';
    dialogConfig.height = '600px';
    const dialogRef = this.dialog.open(VideoDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.playbackEnded.emit(null);
    });

  }

}
