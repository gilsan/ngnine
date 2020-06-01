import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColoringmgnComponent } from './coloringmgn.component';
import { DepartComponent } from './depart/depart/depart.component';
import { LibComponent } from './depart/lib/lib.component';
import { BasicComponent } from './music/basic/basic.component';
// import { DefaultComponent } from './music/default/default.component';
// import { LunchComponent } from './music/lunch/lunch.component';
// import { RecordComponent } from './music/record/record.component';

const routes: Routes = [
    { path: '', component: ColoringmgnComponent, children: [
    { path: '', redirectTo: 'basic', pathMatch: 'full'},
    { path: 'basic', component: BasicComponent },
    { path: 'depart', component: DepartComponent },
    { path: 'library', component: LibComponent },
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColoringmgnRoutingModule { }
