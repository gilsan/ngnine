import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ISpaceImage, SpaceImagesService } from '../space-images.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-ex-image-gallery',
  templateUrl: './ex-image-gallery.component.html',
  styleUrls: ['./ex-image-gallery.component.scss']
})
export class ExImageGalleryComponent implements OnInit {
  static label = 'Gallery';
  constructor(public service: SpaceImagesService) { }

  imageItems: Observable<ISpaceImage[]>;

  ngOnInit(): void {
    this.imageItems = this.service.load('planetary-nebulae');
    // tslint:disable-next-line: angular-rxjs-takeuntil-before-subscribe
    this.imageItems.subscribe((data) => {
      console.log(data);
    });
  }

}
