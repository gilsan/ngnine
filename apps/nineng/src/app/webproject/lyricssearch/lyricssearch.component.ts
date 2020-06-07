import { Component, OnInit } from '@angular/core';
import { LyricsSearchService } from './lyricssearch.service';

// tslint:disable-next-line:ordered-imports
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { combineLatest, Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { IAlbum } from '../models/models';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-lyricssearch',
  templateUrl: './lyricssearch.component.html',
  styleUrls: ['./lyricssearch.component.scss']
})
export class LyricssearchComponent implements OnInit {

  result$: Observable<any>;
  albums: IAlbum[] = [];
  prev: string;
  next: string;
  artist: string;
  songTitle: string;
  listDisplay = 'LIST';
  lyrics: SafeHtml;

  constructor(
    private service: LyricsSearchService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
  }

  getSearch(term: string) {
    this.result$ = this.service.searchSongs(term)
      .pipe(
        shareReplay(),
      );
    this.search();
  }

  search() {
    this.result$.subscribe((data) => {
      this.prev = data.prev ? data.prev : '';
      this.next = data.next ? data.next : '';
    });
    const album$ = this.result$.pipe(
      map((result) => result.data),
      map((lists) => lists.map((list) => list.title)),
    );

    const name$ = this.result$.pipe(
      map((result) => result.data),
      map((lists) => lists.map((list) => list.artist['name'])),
    );

    combineLatest([album$, name$]).subscribe(([title, artist]) => {
      this.albums = [];
      for (let i = 0; i < title.length; i++) {
        this.albums.push({ title: title[i], artist: artist[i] });
      }
    });
  }

  nextSearch() {
    this.result$ = this.service.moreandmore(this.next);
    this.search();
  }

  prevSearch() {
    this.result$ = this.service.moreandmore(this.prev);
    this.search();
  }

  getSongContent(album: IAlbum) {
    this.artist = album.artist;
    this.songTitle = album.title;
    this.service.getSongContent(album.artist, album.title)
      .pipe(
        map((data) => data['lyrics']),
        map((data) => data.replace(/(\r\n|\r|\n)/g, '<br>')),
      )
      .subscribe((data) => {
        this.listDisplay = 'LYRICS';
        this.lyrics = this.sanitizer.bypassSecurityTrustHtml(data);
      });
  }

}
