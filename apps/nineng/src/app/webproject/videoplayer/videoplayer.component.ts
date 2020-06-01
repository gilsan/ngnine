import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss']
})
export class VideoplayerComponent implements OnInit {

  @ViewChild('videoplayer', { static: false }) player: ElementRef;
  isPlay = false;
  progress = 0;
  timestamp = '00:00';
  constructor() { }

  ngOnInit(): void {
  }

  toggleVideo() {
    if (this.isPlay) {
      this.player.nativeElement.play();

    } else {
      this.player.nativeElement.stop();
    }
  }

  toggleVideoStatus() {
    this.isPlay = !this.isPlay;
    this.toggleVideo();

  }

  playVideo() {
    this.isPlay = true;
    this.toggleVideo();
  }

  pauseVideo() {
    this.isPlay = false;
    this.player.nativeElement.pause();
  }

  stopVideo() {
    this.isPlay = false;
    this.toggleVideo();
  }

  updateProgress() {
    let min: string;
    let sec: string;
    this.progress = (this.player.nativeElement.currentTime / this.player.nativeElement.duration) * 100;
    let mins = Math.floor(this.player.nativeElement.currentTime / 60);
    if (mins < 10) {
      min = '0' + mins.toString();
    } else {
      min = mins.toString();
    }

    let secs = Math.floor(this.player.nativeElement.currentTime % 60);
    if (secs < 10) {
      sec = '0' + secs.toString();
    } else {
      sec = secs.toString();
    }

    this.timestamp = `${min}:${sec}`;
  }

  setVideoProgress(progress) {
    // console.log('[][][]', progress);
    this.player.nativeElement.currentTime = (+progress * this.player.nativeElement.duration) / 100;
    console.log(this.player.nativeElement.currentTime);
  }

}
