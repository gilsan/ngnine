import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ISpaceImage, SpaceImagesService } from '../space-images.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-ex-spanning',
  templateUrl: './ex-spanning.component.html',
  styleUrls: ['./ex-spanning.component.scss']
})
export class ExSpanningComponent implements OnInit {
  static label = 'Grid 부분크기조절';

  imageItems: Observable<ISpaceImage[]>;
  constructor(
    public service: SpaceImagesService,
  ) { }

  ngOnInit(): void {
    this.imageItems = this.service.load('planets');
  }

}
