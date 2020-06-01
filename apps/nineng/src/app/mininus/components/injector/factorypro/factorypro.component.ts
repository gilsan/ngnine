import { Component, OnInit, Inject } from '@angular/core';

import { CarService } from './car.service';
import { CourseService } from './course.service';
import { Course } from './course';
import { Prefered_Courses, preferredCoursesFactory } from './preferred-courses';
// import { FactoryProvider , Prefered_Car} from './car.serive.provider';

 
const Course_Book = new Course('Angular js', 'Angular');

@Component({
  selector: 'app-factorypro',
  templateUrl: './factorypro.component.html',
  styleUrls: ['./factorypro.component.scss'],
  providers: [
  //  FactoryProvider,
      CourseService,
      { provide: Course, useValue: Course_Book},
      { provide: Prefered_Courses, useFactory:preferredCoursesFactory(4), deps: [Course,CourseService] }
 
  ]
})
export class FactoryproComponent implements OnInit {

  list:string;
  constructor(
  //  @Inject(Prefered_Car) private carService: CarService,
    @Inject(Prefered_Courses) private preferredCourses: string,
  ) {}

  ngOnInit(): void {
      this.list = this.preferredCourses;
   //   console.log('carService: ',this.carService);
  }

}
