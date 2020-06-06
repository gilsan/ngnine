import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-typinggame',
  templateUrl: './typinggame.component.html',
  styleUrls: ['./typinggame.component.scss']
})
export class TypinggameComponent implements OnInit, AfterViewInit {


  constructor() { }
  private words = [
    'sigh',
    'tense',
    'airplane',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'loving',
  ];
  word: string;

  // init word
  randomWord: string;
  // init score
  score = 0;
  // init time
  totalTime = 10;
  private timeInterval: ReturnType<typeof setInterval>;
  gameOverShow = false;
  settings = false;
  // 난이도
  private difficulty: string;

  @ViewChild('input') input: ElementRef;
  @ViewChild('select') select: ElementRef;

  ngOnInit(): void {
    this.init();

  }

  ngAfterViewInit() {
    console.log('[][난이도]', this.difficulty);
    this.select.nativeElement.value = this.difficulty;
  }

  init() {
    this.getRandomWord();
    this.difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'mdeium';
    this.selectDifficulty(this.difficulty);
    this.timeInterval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  getRandomWord() {
    this.word = this.words[Math.floor(Math.random() * this.words.length)];
  }
  updateScore() {
    this.score++;
  }

  inputData(word: string) {
    if (this.word === word) {
      this.getRandomWord();
      this.input.nativeElement.value = '';
      this.updateScore();
      this.totalTime += 3;
    }
  }

  updateTime() {
    this.totalTime--;
    if (this.totalTime === 0) {
      clearInterval(this.timeInterval);
      this.gameOverShow = true;
    }
  }

  selectDifficulty(select) {
    localStorage.setItem('difficulty', select);
    if (select === 'hard') {
      this.totalTime += 2;
    } else if (select === 'medium') {
      this.totalTime += 4;
    } else {
      this.totalTime += 6;
    }
  }

  gameOverStyle() {
    if (this.gameOverShow) {
      return { display: 'flex' };
    }
    return { display: 'none' };
  }

  reset() {
    this.gameOverShow = false;
    this.score = 0;
    this.totalTime = 10;
    this.init();
  }

  toggle() {
    this.settings = !this.settings;
  }

  setting() {
    if (this.settings) {
      return { hide: true };
    }
    return { hide: false };
  }

}
