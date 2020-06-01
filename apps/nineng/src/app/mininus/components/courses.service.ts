 import { Course, Courses, Lesson, Lessons } from './models/models';
import { Observable, Subject, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class CoursesService {
    public courseChange$ = new Subject();
    constructor(
        private http: HttpClient,
    ) {}

    getCourses(): Observable<Course[]> {
           return of(Courses) ;
      // return this.http.get<Course[]>(`http://221.141.251.58/opensys/courses.php`);
    }

    getCourseById(id: number): Observable<any> {
        const contents = Courses.filter((course) => course.id === id);
        return of(contents);
      //  return this.http.get(`http://221.141.251.58/opensys/courses.php?id=${id}`);
    }

    updateCourse(course: Course): Observable<any> {
        const id = course.id;
        const idx = Courses.findIndex((course) => course.id === id);
        Courses[idx] = course;
        return of(course);
    }

    getLessons(): Observable<Lesson[]> { 
        return of(Lessons);
       // return this.http.get(`http://221.141.251.58/opensys/lessons.php`);
     }

 
}