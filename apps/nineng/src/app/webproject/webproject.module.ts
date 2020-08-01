import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {
//   SpeechRecognitionModule,
// } from '@kamiazya/ngx-speech-recognition';
import { MaterialModule } from '../material.module';
import { BreakoutComponent } from './breakout/breakout.component';
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
import { NewyearcountdownComponent } from './newyearcountdown/newyearcountdown.component';
import { RelaxerComponent } from './relaxer/relaxer.component';
import { SortablelistComponent } from './sortablelist/sortablelist.component';
// import { SpeechreconitionComponent } from './speechreconition/speechreconition.component';
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
    RelaxerComponent,
    BreakoutComponent,
    NewyearcountdownComponent,
    SortablelistComponent,
    //   SpeechreconitionComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    WebprojectRouting,
    MaterialModule,
    ScrollingModule,
    DragDropModule,
    // SpeechRecognitionModule.withConfig({
    //   lang: 'ko',
    //   interimResults: true,
    //   maxAlternatives: 10,
    // }),
  ],
  providers: [

  ],
})
export class WebprojectModule {

}
