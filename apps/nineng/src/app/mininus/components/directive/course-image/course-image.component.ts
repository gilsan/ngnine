import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-image',
  templateUrl: './course-image.component.html',
  styleUrls: ['./course-image.component.scss']
})
export class CourseImageComponent implements OnInit {

  @Input('src') imageUrl: string;
  constructor() { }

  ngOnInit(): void {
   // console.log('[][][course image]',this.imageUrl)
  }

  getImageUrl() {
    return this.imageUrl;
  }

}
