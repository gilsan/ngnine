import { Component, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { filter, tap } from 'rxjs/operators';

import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { CoursesService } from '../../courses.service';
import { Course } from '../../directive/model/courses';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { FCourse } from '../model/course-model';
import { FirebaseCourseStore } from '../services/firebase-course.store';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'courses-card-list',
  templateUrl: './course-card-list.component.html',
  styleUrls: ['./course-card-list.component.scss']
})
export class CourseCardListComponent implements OnInit {

  @Input() courses: FCourse[];
  constructor(
    private router: Router,
    public dialog: MatDialog,
    public courseService: CoursesService,
    public dbservice: FirebaseCourseStore,
  ) { }

  //  @Output() updateCourse = new EventEmitter();
  ngOnInit(): void {

  }

  editCourse(course: FCourse) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.height = '420px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = course;

    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);

    dialogRef.afterClosed()
      .pipe(
        filter((val) => !!val),
        tap((data) => {
          // console.log('[][course-card-list]',data);
          this.courseService.courseChange$.next('changed');
        }),
      )
      .subscribe(() => {
        // this.courses = result;
      });
  }

  goCourse(url: string) {
    this.router.navigate(['/mininus', 'components', 'ngrx', url]);
  }

}
