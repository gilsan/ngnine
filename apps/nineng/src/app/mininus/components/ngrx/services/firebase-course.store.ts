import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FCourse } from '../model/course-model';
import { FLesson } from '../model/lesson-model';
// import { COURSES, LESSONS } from '../data/db-data';
import { map, first } from 'rxjs/operators';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { convertSnaps } from 'apps/nineng/src/app/shared/utils';
// import { convertSnaps } from './utils';
 
 
@Injectable({
   providedIn: 'root'
})
export class FirebaseCourseStore implements OnInit   {

    courses: FCourse[];
    lessons: FLesson[];

    beginnerSubject$ = new BehaviorSubject<FCourse[]>([]);
    begineerObservable$ = this.beginnerSubject$.asObservable();

    coursesSubject$ = new BehaviorSubject<FCourse[]>([]);
    coursesObservable$ = this.coursesSubject$.asObservable();
 
    constructor(private db: AngularFirestore) {
      this.filterByCategory();
    }

    ngOnInit() {}

    saveCourse(idx:string, changes: Partial<FCourse>): Observable<any> {
       const courses = this.coursesSubject$.getValue();
       const index = courses.findIndex( course => course.idx === idx);
       const newCourse: FCourse = {...courses[index], ...changes };
       const newCourses: FCourse[] = courses.slice(0);
       newCourses[index] = newCourse;
       this.coursesSubject$.next(newCourses);

       return  from(this.db.collection('courses').doc(idx).update(changes));
    }

    filterByCategory() {
          this.db.collection('courses', ref=>ref.orderBy('seqNo'))
           .snapshotChanges().pipe(
            map( (snaps) => {
               return   snaps.map( snap =>  {                     
                    return {
                      idx: snap.payload.doc.id,
                      ...snap.payload.doc.data() as FCourse
                    };
                 });
            } ),
            tap( (courses) => {            
               this.coursesSubject$.next(courses);                         
            }),
            first()
        ).subscribe();         
    }

    findLessons(  pageNumber =0,
       pageSize=3): Observable<FLesson[]> {
        
        return this.db.collection('lessons',
              ref=> ref.orderBy('seqNo', 'asc')
                       .limit(pageSize)
                    .startAfter(pageNumber * pageSize)
        ).snapshotChanges().pipe(
              map( (snaps) => convertSnaps<FLesson>(snaps)),
              first()
         );
    }

 


    // makeCourse() {
    //    this.courses =   Object.values(COURSES);    
    //    this.courses.forEach(course => {
    //       this.db.collection('courses').add(course).then();
    //    });
    // }

    // makeLessons() {
    //     this.lessons = Object.values(LESSONS);
      
    //     this.lessons.forEach((lesson) => {
    //         this.db.collection('lessons').add(lesson).then();
    //     })
    // }

}