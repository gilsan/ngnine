import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExCenteringComponent } from './ex-centering/ex-centering.component';

import { MainMenuComponent } from './main-menu/main-menu.component';
import { ResourcesComponent } from './resources/resources.component';
import { exams } from './samples';
import { WelcomComponent } from './welcom/welcom.component';

const routes: Routes = [
  { path: '', component: MainMenuComponent },
  {
    path: 'menu', component: MainMenuComponent, children: [
      // { path: 'ex-centering', component: ExCenteringComponent },

    ],
  },
  { path: 'resources', component: ResourcesComponent },
  { path: 'welcome', component: WelcomComponent },
  ...exams,
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class SpaceWalkRoutingModule { }
