import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkoutService } from '../../../core/workout.service';
import { Exercise } from '../../../core/models';
//import { ExerciseEntityService } from '../../../ngrx-data-service/exercise.entity';

@Component({
  selector: 'app-left-nav-exercises',
  templateUrl: './left-nav-exercises.component.html',
  styleUrls: ['./left-nav-exercises.component.scss']
})
export class LeftNavExercisesComponent implements OnInit {


  @Output() exercise: EventEmitter<Exercise> = new EventEmitter();
  exerciseList$: Observable<Exercise[]>
  constructor(
    private workoutService: WorkoutService,
  //  private exerciseEntityService: ExerciseEntityService
  ) { }

  ngOnInit() {
    //  this.exerciseList$ = this.exerciseEntityService.entities$;
    this.exerciseList$ = this.workoutService.getExercises();
  }

  addExercise(exercise: Exercise) {
     this.exercise.emit(exercise);
  }

}
