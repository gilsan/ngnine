import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FCourse } from '../model/course-model';
import { Observable } from 'rxjs';
import { FirebaseCourseStore } from '../services/firebase-course.store';
import { map, filter, tap } from 'rxjs/operators';

@Injectable()
export class CourseResolver implements Resolve<FCourse> {

    constructor(
        private store: FirebaseCourseStore,
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<FCourse> {
       const url = route.paramMap.get('courseUrl');
       return   this.store.coursesObservable$.pipe(
           map(courses => courses.filter(course => course.url === url)),
           map(courses =>   courses.length == 1 ? courses[0] : undefined),
           tap(courses => console.log(courses)) 
       );        
    }

}