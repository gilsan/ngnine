import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { DomarrayComponent } from './domarray/domarray.component';
import { ExchangerateComponent } from './exchangerate/exchangerate.component';
import { ExpensetrackerComponent } from './expensetracker/expensetracker.component';
import { FormvalidatorComponent } from './formvalidator/formvalidator.component';
import { HangmangameComponent } from './hangmangame/hangmangame.component';
import { MainComponent } from './home/main.component';
import { InfintescrollComponent } from './infintescroll/infintescroll.component';
import { LyricssearchComponent } from './lyricssearch/lyricssearch.component';
import { MealfinderComponent } from './mealfinder/mealfinder.component';
import { MemorycardComponent } from './memorycard/memorycard.component';
import { MenumodalComponent } from './menumodal/menumodal.component';
import { MoviceseatComponent } from './moviceseat/moviceseat.component';
import { MusicplayerComponent } from './musicplayer/musicplayer.component';
import { SpeechtextComponent } from './speechtext/speechtext.component';
import { TypinggameComponent } from './typinggame/typinggame.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';
import { WebprojectRouting } from './webproject.routing';

@NgModule({
  declarations: [
    MainComponent,
    FormvalidatorComponent,
    MoviceseatComponent,
    VideoplayerComponent,
    ExchangerateComponent,
    DomarrayComponent,
    MenumodalComponent,
    HangmangameComponent,
    MealfinderComponent,
    ExpensetrackerComponent,
    MusicplayerComponent,
    InfintescrollComponent,
    TypinggameComponent,
    SpeechtextComponent,
    MemorycardComponent,
    LyricssearchComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    WebprojectRouting,
    MaterialModule,
    ScrollingModule,
  ],
  providers: [

  ],
})
export class WebprojectModule {

}
