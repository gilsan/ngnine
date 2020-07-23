import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { spaceVideosData } from './space-videos-data';

export interface ISpaceVideo {
  title: string;
  author: string;
  id: string;
  videoUrl?: string;
}

const videoBaseUrl = 'https://www.youtube.com/embed/';

// Generate a videoUrl property for each item
// by combining the base URL with the video ID.
//
function addVideoUrl(items: ISpaceVideo[], endpoint: string): ISpaceVideo[] {
  return items.map((itemInfo: ISpaceVideo) => ({
    ...itemInfo,
    videoUrl: videoBaseUrl + '/' + itemInfo.id,
  }));
}

@Injectable({
  providedIn: 'root',
})
export class SpaceVideosService {

  load(endpoint: string): Observable<ISpaceVideo[]> {
    return of(spaceVideosData[endpoint]).pipe(
      map((allItems: any) => addVideoUrl(allItems, endpoint)),
    );
  }

}
