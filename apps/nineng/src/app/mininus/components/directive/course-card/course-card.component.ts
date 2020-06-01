import { Component, Input, OnInit, Output } from '@angular/core';

import { Course } from '../model/courses';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input() course:Course;
  @Input() cardIndex: number;
  // @Output('courseSelected') courseEmitter = new EventEmitter<Course>();
  constructor() { }

  ngOnInit(): void {
   // console.log('[][course card][]', this.course);
  }

  courseView() {
      //  this.courseEmitter.emit()
  }

}
