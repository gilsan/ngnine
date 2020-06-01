import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BoardComponent } from './rxjs/tetris/board/board.component';
import { CanvasComponent } from './rxjs/canvas/canvas.component';
import { ClassproComponent } from './injector/classpro/classpro.component';
import { ComponentrefComponent } from './mgndom/componentref/componentref.component';
import { CourseCardComponent } from './directive/course-card/course-card.component';
import { CourseCardListComponent } from './ngrx/course-card-list/course-card-list.component';
import { CourseDialogComponent } from './ngrx/course-dialog/course-dialog.component';
import { CourseImageComponent } from './directive/course-image/course-image.component';
import { DirectiveComponent } from './directive/directive.component';
import { ElementrefComponent } from './mgndom/elementref/elementref.component';
import { FactoryproComponent } from './injector/factorypro/factorypro.component';
import { GameComponent } from './rxjs/game/game.component';
import { GameService } from './rxjs/tetris/services/game.service';
import { HighlightedDirective } from './directive/highlighted.directive';
import { LazyMainComponent } from './lazyload/lazymain.component';
import { LazymoduleComponent } from './lazymodule/lazymodule.component';
import { LoadingComponent } from './ngrx/loading/loading.component';
import { LoadingService } from './ngrx/services/loading.service';
import { MaterialModule } from '../../material.module';
import { MessageComponent } from './ngrx/message/message.component';
import { MessageService } from './ngrx/services/message.service';
import { NgrxComponent } from './ngrx/ngrx.component';
import { NgtemplateoutletComponent } from './mgndom/ngtemplateoutlet/ngtemplateoutlet.component';
import { QuizService } from './lazyload/quiz.service';
import { SubmenuDirective } from './directive/submenu.directive';
import { TemplaterefComponent } from './mgndom/templateref/templateref.component';
import { TetrisComponent } from './rxjs/tetris/tetris.component';
import { ValueproComponent } from './injector/valuepro/valuepro.component';
import { ViewContainerrefComponent } from './mgndom/view-containerref/view-containerref.component';
import { ViewrefComponent } from './mgndom/viewref/viewref.component';
import { CoursesStore } from './ngrx/services/courses.store';
// import { FirebaseCourseStore } from './ngrx/services/firebase-course.store';
import { CourseComponent } from './ngrx/course/course.component';
import { FormarrayComponent } from './formarray/formarray.component';
import { FormsComponent } from './forms/forms.component';
import { ProgrssbarComponent } from '../rxjs-recipe/progrssbar/progrssbar.component';

@NgModule({
   declarations: [
      BoardComponent,
      CanvasComponent,
      ClassproComponent,
      CourseComponent,
      CourseCardListComponent,
      CourseDialogComponent,
      ComponentrefComponent,
      CourseCardComponent,
      CourseImageComponent,
      DirectiveComponent,
      ElementrefComponent,
      FactoryproComponent,
      GameComponent,
      HighlightedDirective,
      LazyMainComponent,
      LoadingComponent,
      LazymoduleComponent,
      MessageComponent,
      NgtemplateoutletComponent,
      NgrxComponent,
      SubmenuDirective,
      TemplaterefComponent,
      TetrisComponent,
      ViewContainerrefComponent,
      ValueproComponent,
      ViewrefComponent,
      FormarrayComponent,
      FormsComponent,
      ProgrssbarComponent,
   ],
   imports: [
      CommonModule,
      HttpClientModule,
      MaterialModule,
      ReactiveFormsModule,
   ],
   providers: [
      GameService,
      QuizService,
      LoadingService,
      MessageService,
      CoursesStore,
     
    //  FirebaseCourseStore,
   ],
})
export class ComponentsModule {

}
