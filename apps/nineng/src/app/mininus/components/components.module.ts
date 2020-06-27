import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../material.module';
import { ProgrssbarComponent } from '../rxjs-recipe/progrssbar/progrssbar.component';
import { CourseCardComponent } from './directive/course-card/course-card.component';
import { CourseImageComponent } from './directive/course-image/course-image.component';
import { DirectiveComponent } from './directive/directive.component';
import { HighlightedDirective } from './directive/highlighted.directive';
import { SubmenuDirective } from './directive/submenu.directive';
import { FormarrayComponent } from './formarray/formarray.component';
import { FormsComponent } from './forms/forms.component';
import { ClassproComponent } from './injector/classpro/classpro.component';
import { FactoryproComponent } from './injector/factorypro/factorypro.component';
import { ValueproComponent } from './injector/valuepro/valuepro.component';
import { LazyMainComponent } from './lazyload/lazymain.component';
import { QuizService } from './lazyload/quiz.service';
import { LazymoduleComponent } from './lazymodule/lazymodule.component';
import { ComponentrefComponent } from './mgndom/componentref/componentref.component';
import { AddAttributeDirective } from './mgndom/elementref/add-attribute.directive';
import { ElementrefComponent } from './mgndom/elementref/elementref.component';
import { RendererDirective } from './mgndom/elementref/renderer.directive';
import { NgtemplateoutletComponent } from './mgndom/ngtemplateoutlet/ngtemplateoutlet.component';
import { TemplaterefComponent } from './mgndom/templateref/templateref.component';
import { ViewContainerrefComponent } from './mgndom/view-containerref/view-containerref.component';
import { ViewrefComponent } from './mgndom/viewref/viewref.component';
import { CourseCardListComponent } from './ngrx/course-card-list/course-card-list.component';
import { CourseDialogComponent } from './ngrx/course-dialog/course-dialog.component';
// import { FirebaseCourseStore } from './ngrx/services/firebase-course.store';
import { CourseComponent } from './ngrx/course/course.component';
import { LoadingComponent } from './ngrx/loading/loading.component';
import { MessageComponent } from './ngrx/message/message.component';
import { NgrxComponent } from './ngrx/ngrx.component';
import { CoursesStore } from './ngrx/services/courses.store';
import { LoadingService } from './ngrx/services/loading.service';
import { MessageService } from './ngrx/services/message.service';
import { CanvasComponent } from './rxjs/canvas/canvas.component';
import { GameComponent } from './rxjs/game/game.component';
import { BoardComponent } from './rxjs/tetris/board/board.component';
import { GameService } from './rxjs/tetris/services/game.service';
import { TetrisComponent } from './rxjs/tetris/tetris.component';

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
      AddAttributeDirective,
      RendererDirective,
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
