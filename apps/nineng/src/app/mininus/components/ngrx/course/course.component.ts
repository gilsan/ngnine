import { Component, OnInit } from '@angular/core';
import { FCourse } from '../model/course-model';
import { FLesson } from '../model/lesson-model';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap, switchMap, finalize } from 'rxjs/operators';
import { FirebaseCourseStore } from '../services/firebase-course.store';
 
@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

    loading = false;
    course: FCourse;
    lessons: FLesson[];

    lastPageLoaded = 0;
    displayedColumns = ['seqNo', 'description', 'duration'];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private store: FirebaseCourseStore,
    ) {}
    url: string;
    ngOnInit() {
        this.loading = true;
         this.route.paramMap.pipe(
             map(route => route.get('courseUrl')),
             tap(url => this.url = url),
             switchMap( () =>  this.store.coursesObservable$ ),
             map(courses => courses.filter(course => course.url === this.url)),
             map(courses =>   courses.length == 1 ? courses[0] : undefined),
         ).subscribe(data => {
            
               this.course = data;
         });

         this.store.findLessons()
             .pipe(
                 finalize(() => this.loading = false)
             )
             .subscribe(lessons => {
            //  console.log('[][course]', lessons);
              this.lessons = lessons;
         });
      
    }

    loadMore() {
        this.loading = true;
         this.lastPageLoaded++;
         this.store.findLessons(this.lastPageLoaded)
           .pipe(
               finalize(()=> this.loading = false)
           )
          .subscribe(lessons => this.lessons = lessons);
    }

    goBack() {
       this.router.navigate(['/mininus','components','ngrx']);
    }

}