import { CoreModule } from './core.module';
import { Injectable } from '@angular/core';
import { WorkoutLogEntry, ExercisePlan } from './models';
import { LocalStorageService } from './local-storage.service';


@Injectable({
  providedIn: CoreModule
})
export class WorkoutHistoryTrackerService {

  private maxHistoryItems = 20;
  private currentWorkoutLog: WorkoutLogEntry = null;
  private workoutHistory: Array<WorkoutLogEntry> = [];
  private workoutTracked: boolean;
  private storageKey = 'workouts';

  constructor(
    private storage: LocalStorageService
  ) {}

  get tracking(): boolean {
    return this.workoutTracked;
  }

  startTracking() {
    this.workoutTracked = true;
    this.currentWorkoutLog = new WorkoutLogEntry(new Date());
    if(this.workoutHistory.length >= this.maxHistoryItems) {
      this.workoutHistory.shift();
    }
    this.workoutHistory.push(this.currentWorkoutLog);
    this.storage.setItem(this.storageKey,this.workoutHistory);
  }

  exerciseComplete(exercise: ExercisePlan) {
     this.currentWorkoutLog.completed = true;
     this.currentWorkoutLog.lastExercise = exercise.exercise.title;
     ++this.currentWorkoutLog.exercisesDone;
     this.workoutHistory.push(this.currentWorkoutLog);
     this.storage.setItem(this.storageKey, this.workoutHistory);
  }

  endTracking(completed: boolean) {
    this.currentWorkoutLog.completed = completed;
    this.currentWorkoutLog.endedOn = new Date();
    this.currentWorkoutLog = null;
    this.workoutTracked = false;
    this.storage.setItem(this.storageKey, this.workoutHistory);
  }

  getHistory(): Array<WorkoutLogEntry> {
    return this.workoutHistory;
  }
















}
