
import { Router } from '@angular/router';
import { shareReplay, map, debounceTime, distinctUntilChanged, last, tap } from 'rxjs/operators';
import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Subject, combineLatest, fromEvent } from 'rxjs';
import { SubSink } from 'subsink';
import { WorkoutService } from '../core/workout.service';
import { WorkoutPlan } from '../core/models';
// import { WorkoutPlanEntityService } from '../ngrx-data-service/workout-plan.service';
// import {  basePath } from '../server.url';
 

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit, OnDestroy, AfterViewInit {

  
  private subs = new SubSink();
  workoutList:  Array<WorkoutPlan> = [];
  
   // baseImagePath = basePath;

  @ViewChild('search') search: ElementRef;

  constructor(
    private workoutService: WorkoutService,
    private router: Router,
  //  private workoutPlanEntityService:  WorkoutPlanEntityService,
    
  ) {}

  ngOnInit() { 
     this.workoutService.getWorkouts().subscribe( data => {        
        this.workoutList = data;
       // console.log('[35][start component][]',this.workoutList);
     });
  }

  ngAfterViewInit() {
    const search$ = fromEvent(this.search.nativeElement, 'keyup').pipe(
      debounceTime(400),
      distinctUntilChanged(),
      shareReplay());
    const code$ = search$.pipe(
       map( (e: any) => e.code)
    );

    const value$ = search$.pipe(
        map( (e: any) => e.target.value)
    );

    combineLatest([code$, value$]).subscribe( ([code, value]) => {
      if ( code === 'Enter' && value !== undefined || null) {
         console.log('[][] ', code, value);
      }

    })
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
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

  onSelect(id: number) {
   //  console.log('[88][start]', id);
     this.router.navigate(['/fitness','workout',id]);
   }

}
