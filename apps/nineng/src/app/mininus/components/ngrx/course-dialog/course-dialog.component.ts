import { Component, Inject , OnInit} from '@angular/core';
 
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoursesService } from '../../courses.service';
 
 
import { LoadingService } from '../services/loading.service';
import { CoursesStore } from './../services/courses.store';
import { FCourse } from '../model/course-model';
import { FirebaseCourseStore } from '../services/firebase-course.store';

@Component({
  selector: 'scss-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss'],
})
export class CourseDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public course: FCourse,
    public fb: FormBuilder,
    public courseService: CoursesService,
    public coursesStore: CoursesStore,
    public loadingService: LoadingService,
    public store: FirebaseCourseStore,
  ) { }

  ngOnInit(): void {
     this.form = this.fb.group({
       description: [this.course.titles.description],
       categories: [this.course.categories[0]],
       longDescription: [this.course.titles.longDescription]
     });
  }

  save() {
      const category:string[] = [];
      const { idx , ...restcourse} = this.course;      
      const changes = this.form.value;
      const { categories, ...titles} = this.form.value;
      category.push(categories);

    //  console.log('[][dialog]', idx, categories);
      this.store.saveCourse(idx, { titles: titles, categories: category})
        .subscribe(() => {
          this.dialogRef.close(changes);
        })
     
      // this.coursesStore.saveCourse( this.course.id, changes)
      //  .subscribe();
  }

  // updateCourse() {
  //       this.course = {...this.course, ...this.form.value};
  //       const update$ =   this.courseService.updateCourse(this.course);
  //       this.loadingService.showLoadingUntilComplete(update$).subscribe((data) => {
  //         this.dialogRef.close(data);
  //       });
  // }

  close() {
    this.dialogRef.close();
  }

}
