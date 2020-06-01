import { WorkoutHistoryTrackerService } from './../core/workout-history-tracker.service';
import { Component, OnInit } from '@angular/core';
import { WorkoutLogEntry } from '../core/models';
import { Location } from '@angular/common';

@Component({
  selector: 'app-workout-history',
  templateUrl: './workout-history.component.html',
  styleUrls: ['./workout-history.component.scss']
})
export class WorkoutHistoryComponent implements OnInit {

  history:Array<WorkoutLogEntry> = [];
  complete: boolean;

  constructor(
   private tracker: WorkoutHistoryTrackerService,
   private location: Location
  ) { }

  ngOnInit() {
    this.history = this.tracker.getHistory();
    // console.log('[][workout-history][]: ', this.history);
  }

  goBack() {
   this.location.back();
  }

}
