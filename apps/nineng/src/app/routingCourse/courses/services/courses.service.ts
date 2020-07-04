import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import { Course } from '../model/course';
import { LessonDetail } from '../model/lesson-detail';
import { LessonSummary } from '../model/lesson-summary';

@Injectable()
export class CoursesService {

    private subject$ = new BehaviorSubject<Course[]>([]);
    public courses$: Observable<Course[]> = this.subject$.asObservable();

    constructor(private http: HttpClient) {

    }

    loadCourseByUrl(courseUrl: string) {
        const params = new HttpParams()
            .set('url', `${courseUrl}`);

        return this.http.get<Course>(
            `https://cors-anywhere.herokuapp.com/http://221.141.251.58/opensys/getCourseByUrl.php`, { params })
            .pipe(
                shareReplay(),
            );
    }

    loadAllCourseLessonsSummary(courseUrl: string): Observable<LessonSummary[]> {
        return this.http.get<LessonSummary[]>('/api/lessons', {
            params: {
                pageSize: '10000',
                courseUrl,
            },
        })
            .pipe(
                map((res) => res['payload']),
                shareReplay(),
            );
    }

    loadAllCourses(): Observable<Course[]> {
        return this.http.get<Course[]>('https://cors-anywhere.herokuapp.com/http://221.141.251.58/opensys/courses.php')
            .pipe(
                catchError((err) => {
                    const message = '교육과정을 가져오지 못했습니다.';
                    return throwError(err);
                }),
                shareReplay(),
            );
        // .pipe(
        //     catchError((err) => {
        //         const message = 'Could not load courses';
        //         this.message.showErrors(message);
        //         return throwError(err);
        //     }),
        //     tap( (courses) => this.subject$.next(courses)),
        //     shareReplay(),
        // );

    }

    saveCourse(courseId: string, changes: Partial<Course>): Observable<any> {
        return this.http.put(`/api/courses/${courseId}`, changes)
            .pipe(
                shareReplay(),
            );
    }

    searchLessons(search: string): Observable<LessonSummary[]> {
        return this.http.get<LessonSummary[]>('/api/lessons', {
            params: {
                filter: search,
                pageSize: '100',
            },
        })
            .pipe(
                map((res) => res['payload']),
                shareReplay(),
            );
    }

    loadLessonDetail(courseUrl: string, lessonSeqNo: string): Observable<LessonDetail> {
        return this.http.get<LessonDetail>(`/api/lesson-details`, {
            params: {
                courseUrl,
                lessonSeqNo,
            },
        })
            .pipe(
                shareReplay(),
            );
    }
}
