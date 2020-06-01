
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercisesComponent } from './exercises/exercises.component';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { WorkoutBuilderComponent } from './workout-builder.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { FlexComponent } from './flex/flex.component';


const routes: Routes = [
   { path: '',
     component: WorkoutBuilderComponent,
     children: [
      { path: '', redirectTo:'workouts', pathMatch: 'full'},
      { path: 'workouts', component: WorkoutsComponent },
      { path: 'workout', component: WorkoutComponent},
      { path: 'workout/new', component: WorkoutComponent},
      { path: 'workout/:id', component: WorkoutComponent},
      { path: 'exercises', component: ExercisesComponent},
      { path: 'exercise/new', component: ExerciseComponent},
      { path: 'exercise/:id', component: ExerciseComponent},
      { path: 'flex', component: FlexComponent},

     ]}

]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class WorkoutBuilderRotingModule {}
