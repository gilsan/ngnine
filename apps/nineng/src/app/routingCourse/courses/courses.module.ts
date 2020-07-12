import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from './../services/auth.guard';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { CourseComponent } from './course/course.component';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { HomeComponent } from './home/home.component';
import { LessonDetailComponent } from './lesson/lesson-detail.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { CoursesService } from './services/courses.service';
import { ConfirmExitGuard } from '../services/confirm-exit.guard';
@NgModule({
  declarations: [
    HomeComponent,
    CourseComponent,
    CourseDialogComponent,
    LessonDetailComponent,
    CoursesCardListComponent,
    LessonsListComponent,

  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [
    CoursesService,
    AuthGuard,
    ConfirmExitGuard,
  ],
})
export class CoursesModule { }
