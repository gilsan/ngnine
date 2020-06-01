import { CommonModule } from '@angular/common';
import { ExpenseModule } from '../expense/expense.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
// import { LazyMainComponent } from './lazyload/lazymain.component';
// import { LazymoduleComponent } from './lazymodule/lazymodule.component';
import { LemonmartModule } from './lemon-mart/lemonmart.module';
import { MaterialModule } from '../material.module';
import { NgModule } from '@angular/core';
import { PianoComponent } from './piano/piano.component';
// import { QuizService } from './lazyload/quiz.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    PianoComponent,
    // LazyMainComponent,
    // LazymoduleComponent,
  
  ],
  imports: [

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
