import { Component, EventEmitter, Input, NgModule, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../material.module';
import { Question } from '../quiz.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent implements OnInit, OnDestroy, OnChanges {

  @Input() question: Question;
  @Input() questionAnswered = new EventEmitter<boolean>();
  destroy$ = new Subject();
  answeredCorrectly: boolean;

  constructor(
   
  ) { }

  ngOnInit(): void {
    
  }

  ngOnChanges( change: SimpleChanges) {

  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  answer(selectedAnswer: string) {
    this.answeredCorrectly = selectedAnswer === this.question.correctAnswer;
    this.questionAnswered.next(this.answeredCorrectly);
  }
}

@NgModule({
  declarations: [
      QuizCardComponent
  ],
  imports: [
      CommonModule,
      MaterialModule,
      
    ]
})
export class QuizCardModule {

}
