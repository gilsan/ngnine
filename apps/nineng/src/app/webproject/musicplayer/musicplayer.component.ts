import { Component, OnInit, ViewChild, ElementRef, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-musicplayer',
  templateUrl: './musicplayer.component.html',
  styleUrls: ['./musicplayer.component.scss']
})
export class MusicplayerComponent implements OnInit {
  source = 'https://github.com/gilsan/ngnine/tree/master/apps/nineng/src/app/webproject/musicplayer';
  safeurl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustUrl(this.source);

  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  @ViewChild('audio') audio: ElementRef;

  url = '../../../assets/webproject/musicplayer/music/';
  imgurl = '../../../assets/webproject/musicplayer/images/';
  private songs = ['hey', 'summer', 'ukulele'];
  private songIndex = 2;
  music: string;
  cover: string;
  isPlay = true;
  musicTitle: string;
  progress = 0;
  musicinfo = false;
  rotate = false;

  ngOnInit(): void {
    this.loadSong(this.songs[this.songIndex]);
  }

  loadSong(title: string) {
    this.musicTitle = title;
    this.music = `${this.url}/${title}.mp3`;
    this.cover = `${this.imgurl}/${title}.jpg`;
    this.progress = 0;
  }

  playSong() {
    console.log('[playSong]');
    this.audio.nativeElement.play();
    this.isPlay = !this.isPlay;
    this.musicinfo = !this.musicinfo;
    this.rotate = !this.rotate;
  }

  pauseSong() {
    this.audio.nativeElement.pause();
    this.isPlay = !this.isPlay;
    this.rotate = !this.rotate;
  }

  prevSong() {
    this.audio.nativeElement.pause();
    this.songIndex--;
    if (this.songIndex < 0) {
      this.songIndex = 0;
    }
    this.isPlay = !this.isPlay;
    this.loadSong(this.songs[this.songIndex]);
    this.playSong();
  }

  nextSong() {
    this.audio.nativeElement.pause();
    this.songIndex++;
    if (this.songIndex > 2) {
      this.songIndex = 2;
    }
    this.isPlay = !this.isPlay;
    this.loadSong(this.songs[this.songIndex]);
    this.playSong();
  }

  updateProgress() {
    this.progress = (this.audio.nativeElement.currentTime / this.audio.nativeElement.duration) * 100;

  }

  setProgress() {
    return { width: `${this.progress}%` };
  }

  status() {

  }

  musicInfo() {
    if (this.musicinfo) {
      return { opacity: 1, transform: 'translateY(-100%)' };
    }
    return { opacity: 0, transform: 'translateY(100%)' };
  }

  imageRotate() {
    if (this.rotate) {
      return { 'animation-play-state': 'running' };
    }
    return { 'animation-play-state': 'paused' };
  }



}
