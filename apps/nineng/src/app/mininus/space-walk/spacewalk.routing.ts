import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ResourcesComponent } from './resources/resources.component';
import { exams } from './samples';
import { WelcomComponent } from './welcom/welcom.component';

const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'menu', component: MainMenuComponent },
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
