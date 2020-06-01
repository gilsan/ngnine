import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable, Subject, forkJoin } from 'rxjs';

import { Course } from './model/courses';
import { CoursesService } from '../courses.service';
import { SubSink } from 'subsink';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit, AfterViewInit , OnDestroy {

  color: string;
  courses$:Observable<any>;
  lessons$:Observable<any>;
  show = false;
  status$ = new Subject();
  courses: Course[] =[];

  constructor(
    private service: CoursesService
  ) { }

  private subs = new SubSink();

  @ViewChild('tpl') tpl: TemplateRef<any>;
  @ViewChild('embeddedView', {read:ViewContainerRef}) embeddedView: ViewContainerRef;
  ngOnInit(): void {
   this.courses$= this.service.getCourses() ;
   this.lessons$ = this.service.getLessons();

   forkJoin(this.courses$,this.lessons$)
    .subscribe( ([courses, lessons]) => {
      this.courses = courses;
    });  
  }

  ngAfterViewInit() {
    this.subs.sink= this.status$.subscribe(data => {
      if (data) {
        this.embeddedView.createEmbeddedView(this.tpl);
      } else {
        this.embeddedView.clear();
      }
       
    });

  }

  onCourseSelected() {
    
  }

  statusMouse(status: string) {
    
     if (status === 'enter') {
       this.show = true;
     } else if (status === 'leave') {
       this.show = false;
     }
     this.status$.next(this.show);
    
  }

  item(item:string) {
    alert('item !!!');
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
