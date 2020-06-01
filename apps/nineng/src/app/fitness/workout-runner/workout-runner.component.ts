import * as _ from 'lodash';

import { ActivatedRoute, Router } from '@angular/router';
import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Exercise, ExerciseChangedEvent, ExercisePlan, ExerciseProgressEvent, WorkoutPlan} from "../core/models";
import { concatMap, map, mergeMap, tap } from 'rxjs/operators';
import { from, zip } from 'rxjs';

import { SubSink } from 'subsink';
import { WorkoutHistoryTrackerService } from './../core/workout-history-tracker.service';
import { WorkoutService } from '../core/workout.service';
import { WorkoutService2 } from '../core/workout2.servicel';
import { basePath } from '../../server.url';

// import { WorkoutPlanEntityService } from '../ngrx-data-service/workout-plan.service';
// import { ExerciseEntityService } from '../ngrx-data-service/exercise.entity';


@Component({
  selector: 'app-workout-runner',
  templateUrl: './workout-runner.component.html',
  styleUrls: ['./workout-runner.component.scss']
})
export class WorkoutRunnerComponent implements OnInit, OnDestroy {

  workoutPlan: WorkoutPlan;
  workoutTimeRemaining: number;
  restExercise: ExercisePlan;
  currentExerciseIndex: number;
  currentExercise: ExercisePlan = null;
  exerciseRunningDuration: number;
  exerciseTrackingInterval: number;
  workoutPaused: boolean;

  baseImagePath = basePath;
  subs = new SubSink();

  @Output() exercisePaused: EventEmitter<number> = new EventEmitter<number>();
  @Output() exerciseResumed: EventEmitter<number> = new EventEmitter<number>();
  @Output() exerciseProgress: EventEmitter<ExerciseProgressEvent> = new EventEmitter<ExerciseProgressEvent>();
  @Output() exerciseChanged: EventEmitter<ExerciseChangedEvent> = new EventEmitter<ExerciseChangedEvent>();
  @Output() workoutStarted: EventEmitter<WorkoutPlan> = new EventEmitter<WorkoutPlan>();
  @Output() workoutComplete: EventEmitter<WorkoutPlan> = new EventEmitter<WorkoutPlan>();

  constructor(
    private workoutService: WorkoutService,
    private newWorkout : WorkoutService2,
    private tracker: WorkoutHistoryTrackerService,
    private router: Router,
    public route: ActivatedRoute,
     
  //  public workoutPlanEntityService: WorkoutPlanEntityService,
  //  public exerciseEntityService: ExerciseEntityService
  ) {}

  ngOnInit() {

    const id = parseInt(this.route.snapshot.params.id, 0);  
      const workout$ = this.newWorkout.getWorkouts();  
      const exercise$ = this.newWorkout.getExercises();

   // const workout$ = this.workoutPlanEntityService.entities$;
   // const exercise$ = this.exerciseEntityService.entities$

    this.subs.sink=  zip(workout$, exercise$)
       .subscribe((data) => {   
          console.log('[79][workout-runner][ngOnInit]', data[1]);            
          const {name,title, restBetweenExercise,description, exercises, ...rest} = data[0][0];
          this.workoutPlan =  this.buildWorkout(name,title, restBetweenExercise,description, exercises, data[1]);
          this.restExercise = new ExercisePlan(new Exercise(
            'rest','휴식시간','잠시휴식','rest.png'
          ),this.workoutPlan.restBetweenExercise);
          this.start();
       });

   /*
     const workout$ = this.workoutService.getWorkout();
     const exercise$ = this.workoutService.getExercises();

     this.subs.sink=  zip(workout$, exercise$)
       .subscribe((data) => {
          console.log('[55][workout-runner][ngOninit]',data);

          const {name,title, restBetweenExercise,description, exercises, ...rest} = data[0];
          this.workoutPlan =  this.buildWorkout(name,title, restBetweenExercise,description, exercises, data[1]);
          this.restExercise = new ExercisePlan(new Exercise(
            'rest','휴식시간','잠시휴식','rest.png'
          ),this.workoutPlan.restBetweenExercise);
          this.start();
       });
      */
  }

  start() {
       this.tracker.startTracking();
       this.workoutTimeRemaining = this.workoutPlan.totalWorkoutDuration();
       this.currentExerciseIndex = 0;
      
       this.startExercise(this.workoutPlan.exercises[this.currentExerciseIndex]);
       this.workoutStarted.emit(this.workoutPlan);
  }

  startExercise(exercisePlan: ExercisePlan) {
  
    this.currentExercise = exercisePlan;
    this.exerciseRunningDuration = 0;
    this.startExerciseTimeTracking();
 }

  pause() {
    clearInterval(this.exerciseTrackingInterval);
    this.workoutPaused = true;
    this.exercisePaused.emit(this.currentExerciseIndex);
  }

  resume() {
    this.startExerciseTimeTracking();
    this.workoutPaused= false;
    this.exerciseResumed.emit(this.currentExerciseIndex);
  }

  pauseResumeToggle() {
    if (this.workoutPaused) {
      this.resume();
    } else {
      this.pause();
    }
  }

   // 'p' or 'P' key to toggle pause and resume.
  onKeyPressed(event: KeyboardEvent) {
  //  console.log(event);
    if (event.which === 80 || event.which === 122) {
        this.pauseResumeToggle();
    }
  }

   startExerciseTimeTracking() {
    this.exerciseTrackingInterval = window.setInterval(() => {
      if (this.exerciseRunningDuration >= this.currentExercise.duration) {
         clearInterval(this.exerciseTrackingInterval);
         if(this.currentExercise !== this.restExercise) {
            this.tracker.exerciseComplete(this.workoutPlan.exercises[this.currentExerciseIndex]);
         }

         const next: ExercisePlan = this.getNextExercise();

         if(next) {
           if (next !== this.restExercise) {
              this.currentExerciseIndex++;
           }
           this.startExercise(next);
           this.exerciseChanged.emit(new ExerciseChangedEvent(next, this.getNextExercise()));
         } else {
       
           this.tracker.endTracking(true);
           this.workoutComplete.emit(this.workoutPlan);
           this.router.navigate(['/finish']);

         }
         return;
      } else {
         ++this.exerciseRunningDuration;
         --this.workoutTimeRemaining;

        this.exerciseProgress.emit(
           new ExerciseProgressEvent(
             this.currentExercise,
             this.exerciseRunningDuration,
             this.currentExercise.duration - this.exerciseRunningDuration,
             this.workoutTimeRemaining
           )
         );
      }
    }, 1000);
   }

  getNextExercise(): ExercisePlan {
     let nextExercise: ExercisePlan = null;
     if (this.currentExercise === this.restExercise) {
       nextExercise = this.workoutPlan.exercises[this.currentExerciseIndex + 1];
     } else if (this.currentExerciseIndex < this.workoutPlan.exercises.length -1) {
       nextExercise = this.restExercise;
     }
     return nextExercise;
  }


  buildWorkout(na: string ,ti: string,rest:number,desc:string,exe:Array<any>, ex: any): WorkoutPlan {
     const workout = new WorkoutPlan(na,ti,rest,[],desc);
     let videoList = [];
    
     from(ex).subscribe( (data) => {       
        const dur = exe.find(exeData => exeData.name === data["name"]).duration;
        data["videos"].forEach(video => { 
          videoList.push(video);    
        } );
    
        const exName      = data["name"];
        const exTitle     = data["title"];
        const exImage     = data["image"];
        const exNameSound = data["nameSound"];
        const exDesc      = data["description"];
        const exProcedure = data["procedure"];
        
       workout.exercises.push(
         new ExercisePlan( new Exercise(  exName,exTitle,exDesc,exImage,exNameSound,exProcedure,videoList ),parseInt(dur, 0))
       )
       videoList =[];
     });
    
    return workout;

  }

  ngOnDestroy() {
    this.subs.unsubscribe();
    this.tracker.endTracking(false);
  }

}
