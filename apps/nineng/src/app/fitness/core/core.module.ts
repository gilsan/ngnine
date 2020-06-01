import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { WorkoutService } from './workout.service';
import { WorkoutService2 } from './workout2.servicel';

@NgModule({
  declarations:[HeaderComponent],
  imports: [
    CommonModule,

  ],
  exports:[HeaderComponent],
  providers: [
    WorkoutService,
    WorkoutService2,
  ]
})
export class CoreModule {}
