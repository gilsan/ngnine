import { StaticsComponent } from './statics.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallStaticComponent } from './call-static/call-static.component';

const routes: Routes = [
  { path: '', component: StaticsComponent, children: [
        { path: '', redirectTo: 'calls'  , pathMatch: 'full'},
        { path: 'calls', component: CallStaticComponent }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticsRoutingModule { }
