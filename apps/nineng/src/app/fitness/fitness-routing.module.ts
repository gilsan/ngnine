import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FitnessComponent } from './fitness.component';
import { StartComponent } from './start/start.component';
import { WorkoutHistoryComponent } from './workout-history/workout-history.component';


const routes: Routes = [
  {path: '', component: FitnessComponent, children: [
        { path: '', redirectTo: 'start', pathMatch: 'full'},
        { path: 'start', component: StartComponent},
        { path: 'workout', children: [{
              path: '',
              loadChildren: () => import('./workout-runner/workout-runner.module').then(m=> m.WorkoutRunnerModule)
             },
            ],
         },
         { path: 'workout/:id', children: [{
              path: '',
              loadChildren: () => import('./workout-runner/workout-runner.module').then(m=> m.WorkoutRunnerModule)
            }],
         },
         { path: 'builder', children: [{
              path: '',
              loadChildren: () => import('./workout-builder/workout-builder.module').then(m=>m.WorkoutBuilderModule)
              }],
         },
         { path: 'history', component: WorkoutHistoryComponent},
         
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FitnessRoutingModule { }
