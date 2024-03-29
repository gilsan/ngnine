import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { ConfirmExitGuard } from '../services/confirm-exit.guard';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { LessonDetailComponent } from './lesson/lesson-detail.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { CourseResolver } from './services/course.resolver';
import { LessonDetailResolver } from './services/lesson-detail.resolver';
import { LessonsResolver } from './services/lessons.resolver';

const routes: Routes = [
    {
        path: '', component: HomeComponent,
    },
    {
        path: ':courseUrl', component: CourseComponent,
        resolve: { course: CourseResolver },
        canActivate: [AuthGuard],
        canDeactivate: [ConfirmExitGuard],
        canActivateChild: [AuthGuard],
        children: [
            {
                path: '', component: LessonsListComponent,
                resolve: { lessons: LessonsResolver },
            },
            {
                path: 'lessons/:lessonSeqNo',
                component: LessonDetailComponent,
                resolve: { lesson: LessonDetailResolver },
            },
        ],
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
    providers: [
        CourseResolver,
        LessonsResolver,
        LessonDetailResolver,
        AuthGuard,
        ConfirmExitGuard,
    ],
})
export class CoursesRoutingModule {

}
