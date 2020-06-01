import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import { Course} from '../../models/models'
 
import { LoadingService } from './loading.service';
import { MessageService } from './message.service';
 

@Injectable()
export class CoursesStore {

    private subject$ = new BehaviorSubject<Course[]>([]);
    public  courses$: Observable<Course[]> = this.subject$.asObservable();

    constructor(
        private http: HttpClient,
        private loading: LoadingService,
        private message: MessageService,
    ) {
        // this.loadAllCourses();
    }

    private loadAllCourses() {
       const loadCourses$ =  this.http.get<Course[]>(`https://221.141.251.58/opensys/courses.php`)
                              .pipe(
                                  catchError((err) => {
                                      const message = 'Could not load courses';
                                      this.message.showErrors(message);
                                      return throwError(err);
                                  }),
                                  tap( (courses) => this.subject$.next(courses)),
                              );
       this.loading.showLoadingUntilComplete(loadCourses$).subscribe();
    }

    filterByCategory(category: string): Observable<Course[]> {
        return this.courses$
                .pipe(
                //    map( (courses) =>
                //      courses.filter( (course) => course.category === category)),
                );
    }

    saveCourse(courseId: number, changes: Partial<Course>) {
        //  const courses = this.subject$.getValue();
        //  const index = courses.findIndex((course) => course.id === courseId);
        //  const newCourse: Course = { ...courses[index], ...changes};
        //  const newCourses: Course[] = courses.slice(0);
        //  newCourses[index] = newCourse;
        //  this.subject$.next(newCourses);
        //  const newChanges = {id: courseId, ...changes};

        //  console.log('[][store][saveCourse]', newChanges);
        //  const params = new HttpParams()
        //         .set('id', courseId.toString())
        //         .set('description', changes.description)
        //         .set('category', changes.category)
        //         .set('longDescription', changes.longDescription);
        //  return this.http.get(`https://221.141.251.58/opensys/courseUpdate.php`, {params})
    
        //               .pipe(
        //                   catchError( (err) => {
        //                       const message = '저장하지 못했습니다.';
        //                       this.message.showErrors(message);
        //                       return throwError(err);
        //                   }),
        //                   shareReplay(),
        //               );
    }
}
