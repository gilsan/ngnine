import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ISpaceImage, SpaceImagesService } from '../space-images.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-ex-full-viewport',
  templateUrl: './ex-full-viewport.component.html',
  styleUrls: ['./ex-full-viewport.component.scss']
})
export class ExFullViewportComponent implements OnInit {
  static label = '메뉴';

  title = '그림보기';
  showNav = true;

  imageItems: Observable<ISpaceImage[]>;

  constructor(
    private service: SpaceImagesService,
  ) { }

  ngOnInit(): void {
    this.imageItems = this.service.load('posters');
  }

}
