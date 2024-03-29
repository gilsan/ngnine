import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LessonDetail } from '../model/lesson-detail';
import { CoursesService } from './courses.service';

@Injectable()
export class LessonDetailResolver implements Resolve<LessonDetail> {

    constructor(private courses: CoursesService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<LessonDetail> {

        // tslint:disable-next-line:one-variable-per-declaration
        const courseUrl = route.paramMap.get('courseUrl'),
            lessonSeqNo = route.paramMap.get('lessonSeqNo');

        return this.courses.loadLessonDetail(courseUrl, lessonSeqNo);
    }


}
