import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FitnessRoutingModule } from './fitness-routing.module';
import { FitnessComponent } from './fitness.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { StartComponent } from './start/start.component';
import { WorkoutHistoryComponent } from './workout-history/workout-history.component';
 

@NgModule({
  declarations: [
    FitnessComponent,
    StartComponent,
    WorkoutHistoryComponent,
  ],
  imports: [
    CommonModule,
    FitnessRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    
  ]
})
export class FitnessModule { }
