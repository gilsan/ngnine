import { Component, OnInit } from '@angular/core';
import { ISpaceImage, SpaceImagesService } from '../space-images.service';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { shuffleArrayInPlace } from '../utils';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-ex-transform',
  templateUrl: './ex-transform.component.html',
  styleUrls: ['./ex-transform.component.scss']
})
export class ExTransformComponent implements OnInit {
  static label = '변화';

  imageItems: Observable<ISpaceImage[]>;

  constructor(
    private service: SpaceImagesService,
  ) { }

  ngOnInit(): void {
    this.imageItems = this.service.load('women-in-space')
      .pipe(map((data) => shuffleArrayInPlace([...data])));
  }

}
