import { RouterModule, Routes } from '@angular/router';

import { ExamComponent } from './exam.component';
import { NgModule } from '@angular/core';
import { Rxjspart1Component } from './rxjspart1/rxjspart1.component';

const routes: Routes = [ 
  { path: '',  children: [
    {path: '', component: Rxjspart1Component},
    {path: 'rxjspart1', component: Rxjspart1Component }
  ]}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ExamRouting {

}