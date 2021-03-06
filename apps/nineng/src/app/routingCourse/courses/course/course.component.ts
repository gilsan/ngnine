import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../model/course';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {

  course: Course;

  couponCode: string;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.course = this.route.snapshot.data['course'];

    this.couponCode = this.route.snapshot.queryParamMap.get('couponCode');

  }

  confirmExit() {
    return confirm(`Are you sure you want to exit ${this.course.description}?`);
  }

}
