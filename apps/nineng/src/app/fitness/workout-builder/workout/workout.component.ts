import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, concat, from, fromEvent, of, zip } from 'rxjs';
import { Exercise, ExerciseList, ExercisePlan, WorkoutPlan } from '../../core/models';
import { concatMap, debounceTime, filter, find, map, switchMap, tap } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { SubSink } from 'subsink';
import { WorkoutBuilderService } from '../service/workout-builder.service';
import { WorkoutService } from '../../core/workout.service';
import { basePath } from '../../../server.url';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit, OnDestroy, AfterViewInit  {

  public  subject$ = new BehaviorSubject<number>(0);

  private subs = new SubSink();
  public workoutPlan: WorkoutPlan =new WorkoutPlan('','',0,[],'',0);
  public exercise: Exercise;
  name: string = '';
  workoutTitle: string = '';
  restBetweenExercise: number = 0;
  description: string = '';
  exeLength: number = 0;
  duration: number = 0;
  totalDuration: number = 0;
  exerciseInfo = [];

  baseImagePath = basePath;

  form: FormGroup;
  @ViewChild('resttime', { static: true}) resttime: ElementRef;
  constructor(
    public router: ActivatedRoute,
    public workoutBuilderService: WorkoutBuilderService,
    public workoutService: WorkoutService,
    public fb: FormBuilder
  ) {}

  durations = [{ title: '15 초', value: 15 },
      { title: '30 초', value: 30 },
      { title: '45 초', value: 45 },
      { title: '1 분', value: 60 },
      { title: '1 분 15 초', value: 75 },
      { title: '1 분 30 초', value: 90 },
      { title: '1 분 45 초', value: 105 },
      { title: '2 분', value: 120 },
      { title: '2 분 15 초', value: 135 },
      { title: '2 분 30 초', value: 150 },
      { title: '2 분 45 초', value: 165 },
      { title: '3 분', value: 180 },
      { title: '3 분 15 초', value: 195 },
      { title: '3 분 30 초', value: 210 },
      { title: '3 분 45 초', value: 225 },
      { title: '4 분', value: 240 },
      { title: '4 분 15 초', value: 255 },
      { title: '4 분 30 초', value: 270 },
      { title: '4 분 45 초', value: 285 },
      { title: '5 분', value: 300 }];


  ngOnInit() {
      const id =  parseInt(this.router.snapshot.params.id,0);
       
      if(id) {
        this.initData(id)
      }

        this.form = this.fb.group({
          name: [this.name],
          subject: [this.workoutTitle],
          rest: [this.restBetweenExercise],
          duration: [this.duration],
          desc: [this.description],
          exetime: [this.duration]
        });
  }

  initData(id: number) {
    this.subs.sink = this.workoutService.workoutPlan$
        .pipe(
          filter(data => data.length > 0),
          map( data => {
              return   data.filter(item => item.id === id)
          }),
          tap( data => {
          //  console.log('[79][workout]', data)
            this. workoutTitle = data[0].title;
            this.name = data[0].name;
            this.description = data[0].description;
            this.restBetweenExercise = data[0].restBetweenExercise;
            this.exeLength = data[0].exercises.length;
           }),
           map( data => data[0].exercises),
           switchMap( data => from(data)),
           concatMap( (data: any) => {
               this.duration = parseInt(data.duration, 0);
               this.totalDuration = this.totalDuration + this.duration;
               const exercise = this.workoutBuilderService.getExerciseByName(data.name);
               return exercise;
           }),

        )
        .subscribe( (data ) => {
            this.exerciseInfo.push( {duration: this.duration,   ...data });
        });
  }

  ngAfterViewInit() {
      const inputDur = fromEvent<any>(this.resttime.nativeElement, 'keyup')
                         .pipe(
                           map(event => event.target.value),
                           debounceTime(400),
                         );
        inputDur.subscribe(data => this.totalDuration = data);
  }

  ngOnDestroy() {
     this.subs.unsubscribe();
  }

  onSave() {
      // console.log('[118]',this.exerciseInfo);
       this.workoutPlan.name = this.form.value.name;
       this.workoutPlan.title = this.form.value.subject;
       this.workoutPlan.restBetweenExercise = this.form.value.duration;
       this.workoutPlan.description = this.form.value.desc;
       this.exerciseInfo.forEach(item => this.workoutPlan.exercises.push(item));
     //  console.log('[135][onSave]', this.workoutPlan);
       this.workoutService.saveNewWorkoutPlan(this.workoutPlan);
  }

  moveExerciseto(info, newIndex) {
         if( newIndex > this.exerciseInfo || newIndex < 0 ){
           return;
         }

         const currentIndex = this.exerciseInfo.indexOf(info);
         this.exerciseInfo.splice(newIndex,0, this.exerciseInfo.splice(currentIndex,1)[0]);
  }

  removeExercise(info) {
    //  console.log('[121][removeExe]');
      const currentIndex = this.exerciseInfo.indexOf(info);
      this.exerciseInfo.splice(currentIndex,1);
  }

  addExercise(exercise: Exercise) {
        console.log('[155]addExercise] ', exercise);
        this.exerciseInfo.push(exercise);

  }







}
