import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CalendarHeaderComponent } from './admin/calendar-header/calendar-header.component';
import { ColoringlistComponent } from './admin/coloringlist/coloringlist.component';
import { FullCalendarComponent } from './admin/full-calendar/full-calendar.component';
import { ConvertComponent } from './convert/convert.component';

const routes: Routes = [
    { path: '', redirectTo: 'admin', pathMatch: 'full'},
    { path: 'admin',  component: AdminComponent, children: [
      { path: '', redirectTo: 'calendar-header',  pathMatch: 'full'},
      { path: 'calendar-header', component: CalendarHeaderComponent },
      { path: 'convert', component: ConvertComponent},
      { path: 'coloring-list', component: ColoringlistComponent },
      { path: 'weekday', component: FullCalendarComponent},
      { path: 'mgn', loadChildren: () => import('./coloringmgn/coloringmgn.module').then((m) => m.ColoringmgnModule)},
      { path: 'record', loadChildren: () => import('./recording/recording.module').then((m) => m.RecordingModule)},
      { path: 'statics', loadChildren: () => import('./statics/statics.module').then((m) => m.StaticsModule)},
    ]},
// loadChildren: ()=> import('./workout-runner/workout-runner.module').then(m=> m.WorkoutRunnerModule)
];

@NgModule({
    imports: [
       RouterModule.forChild(routes),
    ],
    exports: [
      RouterModule,
    ],
 })
export  class ColoringRouting {}
