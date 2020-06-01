
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {WorkoutContainerComponent} from "./workout-container/workout-container.component";


const routes: Routes = [
  {path: '', component: WorkoutContainerComponent}
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
})
export class WorkoutRoutingModule {}
