import { CommonModule } from '@angular/common';
import { ExamComponent } from './exam.component';
import { ExamRouting } from './exam.routing';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Rxjspart1Component } from './rxjspart1/rxjspart1.component';

@NgModule({
   declarations:[
    ExamComponent,
    Rxjspart1Component
   ],
   imports: [
       CommonModule,
       ReactiveFormsModule,
       ExamRouting
   ],
   exports:[],
   providers:[]
})
export class ExamModule {

}