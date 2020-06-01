import { BehaviorSubject, Observable } from 'rxjs';
import { Exercise, WorkoutPlan } from './models';
import {HttpClient, HttpParams} from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { CoreModule } from './core.module';
import { Injectable } from '@angular/core';
import { Url } from '../../server.url';

@Injectable()
export class WorkoutService {

  private  subject = new BehaviorSubject<WorkoutPlan[]>([]);
  public   workoutPlan$ = this.subject.asObservable();

  private beSubject = new BehaviorSubject<Exercise[]>([]);
  public exercises$ = this.beSubject.asObservable();


  constructor(
    private http: HttpClient
  ) {}

 getWorkout(): Observable<WorkoutPlan> {
  return this.http.get<WorkoutPlan>(`${Url}/fitness/getListWorkout`)
             .pipe(
                map( data => data[0]),
           )
 }

 getWorkoutById(id: number): Observable<WorkoutPlan> {
  return this.http.get<WorkoutPlan>(`${Url}/fitness/getWorkoutById/${id}`);
 }

 saveNewWorkoutPlan(workout: WorkoutPlan) {
    console.log('[][saveNewWorkoutPlan] ', workout)

 }

 getWorkouts(): Observable<WorkoutPlan[]>  {
   this.http.get<WorkoutPlan[]>(`${Url}/fitness/getListWorkout`)
         .subscribe( data => {
            this.subject.next(data);
         });
      return this.subject;
 }
 saveNewExercise(exercise: Exercise) {
     console.log('[][saveNewExercise] ', exercise);
 }

 getExercises(): Observable<Exercise[]>  {
    return  this.http.get<Exercise[]>(`${Url}/fitness/getExercises`)
    // .subscribe( data => {
    //  console.log('[55][service][getExercises]',data);
    //     this.beSubject.next(data);
    //     return this.beSubject;
    // });
    // return this.beSubject;
 }

 getExerciseByName(name: string) {
   const params = new HttpParams()
     .set('name', `${name}`) ;
    return this.http.get(`${Url}/fitness/getExerciseByName`, {params})
 }



}
