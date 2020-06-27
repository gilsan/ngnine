import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  // key: Mwp34o9Kdkb6TLM12heN_xQgrrbSHivNBFn15yDAapA
  // secret key : NVB2OxMM3xH-WPnzryMjt2hL63Eb7kfMU8bHOHqqf1k
  url = 'https://api.unsplash.com/photos/random?client_id=Mwp34o9Kdkb6TLM12heN_xQgrrbSHivNBFn15yDAapA';

  constructor(
    private http: HttpClient,
  ) { }

  getPhotos(): Observable<any> {

    return this.http.get(`${this.url}`)
      .pipe(
        pluck('urls', 'small'),
      );
  }

}
