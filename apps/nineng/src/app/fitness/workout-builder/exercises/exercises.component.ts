//import { ExerciseEntityService } from './../../ngrx-data-service/exercise.entity';

import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../core/workout.service';
import { Exercise } from '../../core/models';
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {

  exerciseList: Array<Exercise> = [];
  exerciseList$: Observable<any>;
  constructor(
    public  workoutService: WorkoutService,
    private router: Router,
   // private exerciseEntityService: ExerciseEntityService

  ) { }

  ngOnInit( ) {
  // this.exerciseEntityService.entities$.subscribe(data => console.log('[][][exercise]', data))
   this.exerciseList$  = this.workoutService.getExercises();
  //   this.exerciseList$ = this.exerciseEntityService.entities$;
  }

  onSelect(exercise) {
    // console.log('[28][exercises]',exercise);
    this.router.navigate(['/builder/exercise', exercise.id]);
  }
}
