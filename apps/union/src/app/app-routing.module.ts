import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'scroll', pathMatch: 'full' },
  { path: 'exam', children: [
    { path: '', loadChildren: ()=> import('./exam/exam.module').then(m=> m.ExamModule)},
  ]},
  { path: 'scroll', children: [
     { path: '', loadChildren: () =>import('./subscroll/subscroll.module').then(m=>m.SubscrollModule)}
  ]},
  { path: '**', redirectTo: 'scroll'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
