import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ISpaceImage, SpaceImagesService } from '../space-images.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-ex-overlap',
  templateUrl: './ex-overlap.component.html',
  styleUrls: ['./ex-overlap.component.scss']
})
export class ExOverlapComponent implements OnInit {
  static label = '위치중첩';

  imageItems: Observable<ISpaceImage[]>;
  constructor(
    public service: SpaceImagesService,
  ) { }

  ngOnInit(): void {
    this.imageItems = this.service.load('planets');
  }

}
