import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'a-comp',
  styleUrls: ['./a.component.scss'],
  templateUrl: './a.component.html',
})
export class AComponent implements OnInit {

  photo = '';
  constructor(
    private photosService: PhotosService,
  ) { }

  ngOnInit(): void {
    this.getPhotos();

  }

  getPhotos() {
    this.photosService.getPhotos().subscribe((photo) => {
      this.photo = photo;
    });
  }

  fetchPhoto() {
    this.getPhotos();
  }
}
