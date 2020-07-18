import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-image-gallery',
  templateUrl: './ex-image-gallery.component.html',
  styleUrls: ['./ex-image-gallery.component.scss']
})
export class ExImageGalleryComponent implements OnInit {
  static label = 'Ooooh Pretty';
  constructor() { }

  ngOnInit(): void {
  }

}
