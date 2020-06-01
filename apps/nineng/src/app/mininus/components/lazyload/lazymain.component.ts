import { Component, OnInit, ComponentFactoryResolver, Injector, ViewChild, ViewContainerRef, OnDestroy } from '@angular/core';
import { QuizService } from './quiz.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
/******
 * https://github.com/kreuzerk/city-quiz
 */

@Component({
    selector: 'app-lazymain',
    templateUrl: './lazymain.component.html',
    styleUrls: ['./lazymain.component.scss']
})
export class LazyMainComponent implements OnInit , OnDestroy{

  @ViewChild(
    'quizContainer',
    { read: ViewContainerRef}
  ) quizContainer: ViewContainerRef;

  quizStarted = false;
  private destroy$ = new Subject();


  constructor(
    private quizService : QuizService,
    private cfr: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

 async startQuiz() {
     this.lazyLoadQuizCard(); 
  }

  async showNewQuestion() {
    await this.lazyLoadQuizCard();
    this.quizStarted = true;
  }

  private async lazyLoadQuizCard() {
    const { QuizCardComponent } = await import('./quiz-card/quiz-card.component');
    const quizCardFactory = this.cfr.resolveComponentFactory(QuizCardComponent);
    const {instance} = this.quizContainer.createComponent(quizCardFactory, null, this.injector);
    instance.question = this.quizService.getNextQuestion();
    instance.questionAnswered.pipe(
       takeUntil(instance.destroy$)
    ).subscribe(()=>   this.showNewQuestion()  );
  }

  

}