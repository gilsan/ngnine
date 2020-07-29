import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExpenseModule } from '../expense/expense.module';
import { MaterialModule } from '../material.module';
// import { QuizService } from './lazyload/quiz.service';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
// import { LazyMainComponent } from './lazyload/lazymain.component';
// import { LazymoduleComponent } from './lazymodule/lazymodule.component';
import { LemonmartModule } from './lemon-mart/lemonmart.module';
import { PianoComponent } from './piano/piano.component';
import { RecipeComponent } from './recipe/recipe.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    PianoComponent,
    RecipeComponent,
    // LazyMainComponent,
    // LazymoduleComponent,

  ],
  imports: [
    HttpClientModule,
    CommonModule,
    MaterialModule,
    HomeRoutingModule,
    LemonmartModule,
    ExpenseModule,
    SharedModule,

  ],
  providers: [
    // QuizService,

  ]
})
export class HomeModule { }
