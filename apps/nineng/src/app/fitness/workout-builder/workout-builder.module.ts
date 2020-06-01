import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { WorkoutBuilderComponent } from './workout-builder.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { WorkoutBuilderRotingModule } from './workout-builder.routing.module';
import { LeftNavExercisesComponent } from './navigation/left-nav-exercises/left-nav-exercises.component';
import { LeftNavMainComponent } from './navigation/left-nav-main/left-nav-main.component';
import { SubNavMainComponent } from './navigation/sub-nav-main/sub-nav-main.component';
import { FlexComponent } from './flex/flex.component';
import { WorkoutBuilderService } from './service/workout-builder.service';

import { MaterialModule } from '../../material.module';
//import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    WorkoutBuilderComponent,
    ExerciseComponent,
    ExercisesComponent,
    WorkoutComponent,
    WorkoutsComponent,
    LeftNavExercisesComponent,
    LeftNavMainComponent,
    SubNavMainComponent,
    FlexComponent,
    ],
  imports: [
    CommonModule,
    WorkoutBuilderRotingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    WorkoutBuilderService
  ]
})
export class WorkoutBuilderModule { }
