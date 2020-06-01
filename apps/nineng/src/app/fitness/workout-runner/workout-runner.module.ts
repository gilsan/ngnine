import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutRunnerComponent } from './workout-runner.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { ExerciseDescriptionComponent } from './exercise-description/exercise-description.component';
import { SecondsToTimePipe } from './shared/seconds-to-time.pipe';
import { WorkoutRoutingModule } from './workout.routing.module';
import { VideoDialogComponent } from './video-player/video-dialog/video-dialog.component';
import { MaterialModule } from '../../material.module';
import { WorkoutAudioComponent } from './workout-audio/workout-audio.component';
import { MyAudioDirective } from './shared/my-audio.directive';
import { WorkoutContainerComponent } from './workout-container/workout-container.component';



@NgModule({
  declarations: [
    WorkoutRunnerComponent,
    VideoPlayerComponent,
    ExerciseDescriptionComponent,
    SecondsToTimePipe,
    VideoDialogComponent,
    WorkoutAudioComponent,
    MyAudioDirective,
    WorkoutContainerComponent
  ],
  imports: [
    CommonModule,
    WorkoutRoutingModule,
    MaterialModule
  ],
  exports: [
    WorkoutRunnerComponent
  ],
  entryComponents: [
    VideoDialogComponent
  ]
})
export class WorkoutRunnerModule { }
