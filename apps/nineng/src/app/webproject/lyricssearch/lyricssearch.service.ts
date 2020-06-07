import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LyricsSearchService {

  private apiURL = 'https://api.lyrics.ovh';

  constructor(
    private http: HttpClient,
  ) { }

  searchSongs(term) {
    return this.http.get(`${this.apiURL}/suggest/${term}`);
  }

  moreandmore(url) {
    return this.http.get(`https://cors-anywhere.herokuapp.com/${url}`);
  }

  getSongContent(artist, songTitle) {
    return this.http.get(`${this.apiURL}/v1/${artist}/${songTitle}`);
  }

}
