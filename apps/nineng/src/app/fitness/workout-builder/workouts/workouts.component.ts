import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, zip } from 'rxjs';

import {Observable} from "rxjs";
import {Router} from "@angular/router";
import { SubSink } from 'subsink';
import { WorkoutPlan } from "../../core/models";
import { WorkoutService } from '../../core/workout.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit, OnDestroy {

  workoutPlan: WorkoutPlan;
  workoutList:  Array<WorkoutPlan> = [];
  workoutList$: Observable<any>;
  subs = new SubSink();

  constructor(
    public  workoutService: WorkoutService,
    private router: Router
  ) { }

  ngOnInit( ) {

    this.workoutService.getWorkouts().subscribe( data => {
       this.workoutList = data;

    });

  }

  ngOnDestroy() {
    this.subs.unsubscribe();

  }

  onSelect(workout: WorkoutPlan) {
   // console.log('[42][workouts]', workout);
    this.router.navigate(['/builder/workout', workout.id]);
  }

  duration(workout: WorkoutPlan) {
          if (!workout.exercises) {
            return 0;
        }
       const total = workout.exercises.map((e)=> Math.floor(e.duration)).reduce((previous,current)=> previous + current);
       const value = (workout.restBetweenExercise ? workout.restBetweenExercise : 0) * (workout.exercises.length -1) + total;

       const hours = Math.floor(value/3600);
       const minutes = Math.floor( (value - (hours *60)) / 60);
       const seconds = value - (hours * 3600) - (minutes * 60);

       return ('0' +hours).substr(-2) + ':'
            +  ('0' + minutes).substr(-2) + ':'
            + ('0' + seconds).substr(-2);
  }

  count(workout: WorkoutPlan) {

    return workout.exercises.length;
  }







}
