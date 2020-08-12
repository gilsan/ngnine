import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Cropper from 'cropperjs';


@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.scss']
})
export class CropperComponent implements OnInit, AfterViewInit {

  @ViewChild("image", { static: false })
  public imageElement: ElementRef;

  imageSource: string = 'assets/hotel/beach-houses.jpg';
  imageDestination: string = '';
  private cropper: Cropper;

  constructor(

  ) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.cropper = new Cropper(this.imageElement.nativeElement, {
      zoomable: true,
      scalable: true,
      aspectRatio: 1,
      crop: () => {
        const canvas = this.cropper.getCroppedCanvas();
        this.imageDestination = canvas.toDataURL('image/png');
      }
    });
  }

}
