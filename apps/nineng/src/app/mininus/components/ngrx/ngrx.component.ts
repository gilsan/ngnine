import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';


import { CoursesService } from '../courses.service';
import { FCourse } from './model/course-model';
import { CoursesStore } from './services/courses.store';
import { FirebaseCourseStore } from './services/firebase-course.store';
import { LoadingService } from './services/loading.service';
import { MessageService } from './services/message.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'scss-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.scss'],
})
export class NgrxComponent implements OnInit {

  constructor(
    private coursesStore: CoursesStore,
    private service: CoursesService,
    private dbservice: FirebaseCourseStore,
    private loadingService: LoadingService,
    private messageService: MessageService,
  ) { }

  courses$: Observable<FCourse[]>;
  beginnerCourses$: Observable<FCourse[]>;
  advancedCourses$: Observable<FCourse[]>;

  ngOnInit(): void {
    this.loadCourse();
  }

  loadCourse() {
    // this.courses$ = this.dbservice.filterByCategory();
    this.courses$ = this.dbservice.coursesObservable$;
    this.beginnerCourses$ = this.courses$.pipe(
      map((courses) => {
        return courses.filter((course) => course.categories.includes('BEGINNER'));
      }),
    );

    this.advancedCourses$ = this.courses$.pipe(
      map((courses) => {
        return courses.filter((course) => course.categories.includes('ADVANCED'));
      }),
    );
  }

  courseUpdate() {

  }

}
