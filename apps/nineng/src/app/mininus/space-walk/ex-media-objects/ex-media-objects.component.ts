import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ISpaceImage, SpaceImagesService } from '../space-images.service';

import { shuffleArrayInPlace } from '../utils';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-ex-media-objects',
  templateUrl: './ex-media-objects.component.html',
  styleUrls: ['./ex-media-objects.component.scss']
})
export class ExMediaObjectsComponent implements OnInit {
  static label = '여성우주천비행사';

  imageItems: Observable<ISpaceImage[]>;
  constructor(
    public service: SpaceImagesService,
  ) { }

  ngOnInit(): void {
    this.imageItems = this.service.load('women-in-astronomy')
      .pipe(
        map((data) => shuffleArrayInPlace([...data])),
      );

  }

}
