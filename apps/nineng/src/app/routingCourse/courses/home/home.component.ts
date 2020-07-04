import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoadingService } from '../../shared/loading/loading.service';
import { Course, sortCoursesBySeqNo } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;

  constructor(
    private courses: CoursesService,
    private loading: LoadingService) {

  }

  ngOnInit() {

    this.reloadCourses();

  }

  reloadCourses() {

    const courses$ = this.courses.loadAllCourses();
    // tslint:disable-next-line: angular-rxjs-takeuntil-before-subscribe
    // courses$.subscribe((data) => {
    //   console.log(data);
    // });
    this.beginnerCourses$ = courses$.pipe(
      map((courses) => courses.filter((course) => course.category === 'BEGINNER')),
    );

    this.advancedCourses$ = courses$.pipe(
      map((courses) => courses.filter((course) => course.category === 'ADVANCED')),
    );
    //   this.beginnerCourses$ = this.filterByCategory(courses$, 'BEGINNER');
    //   this.advancedCourses$ = this.filterByCategory(courses$, 'ADVANCED');

  }

  // filterByCategory(courses$: Observable<Course[]>, category: string) {
  //   return this.loading.showLoaderUntilCompleted(courses$)
  //     .pipe(
  //       map(courses => courses.filter(course => course.category == category).sort(sortCoursesBySeqNo))
  //     );
  // }

}
