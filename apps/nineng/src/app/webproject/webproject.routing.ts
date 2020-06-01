import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomarrayComponent } from './domarray/domarray.component';
import { ExchangerateComponent } from './exchangerate/exchangerate.component';
import { ExpensetrackerComponent } from './expensetracker/expensetracker.component';
import { FormvalidatorComponent } from './formvalidator/formvalidator.component';
import { HangmangameComponent } from './hangmangame/hangmangame.component';
import { MainComponent } from './home/main.component';
import { MealfinderComponent } from './mealfinder/mealfinder.component';
import { MenumodalComponent } from './menumodal/menumodal.component';
import { MoviceseatComponent } from './moviceseat/moviceseat.component';
import { MusicplayerComponent } from './musicplayer/musicplayer.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';

const routes: Routes = [

  {
    path: '', component: MainComponent, children: [
      { path: '', redirectTo: 'home' },
      { path: 'home', component: MainComponent },
      { path: 'formvalidator', component: FormvalidatorComponent },
      { path: 'moviceseat', component: MoviceseatComponent },
      { path: 'videoplayer', component: VideoplayerComponent },
      { path: 'exchangerate', component: ExchangerateComponent },
      { path: 'domarray', component: DomarrayComponent },
      { path: 'menumodal', component: MenumodalComponent },
      { path: 'hangmangame', component: HangmangameComponent },
      { path: 'mealfinder', component: MealfinderComponent },
      { path: 'expensetracker', component: ExpensetrackerComponent },
      { path: 'musicplayer', component: MusicplayerComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class WebprojectRouting { }
