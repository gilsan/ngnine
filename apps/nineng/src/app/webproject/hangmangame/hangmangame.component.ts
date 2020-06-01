// tslint:disable-next-line:max-line-length
import { Component, ElementRef, HostListener, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-hangmangame',
  templateUrl: './hangmangame.component.html',
  styleUrls: ['./hangmangame.component.scss'],
})
export class HangmangameComponent implements OnInit, AfterViewInit {

  @ViewChild('words', { static: false }) words: ElementRef;
  @ViewChildren('figure0,figure1, figure2,figure3,figure4',
    { read: ElementRef }) figure: QueryList<ElementRef>;

  correctLetters: string[] = [];
  wrongLetters = [];
  private selectedWord = 'programming';
  playable = true;
  wordEl = [];

  finalMessage = '';
  finalMessageRevealWrod = '';

  figure0: boolean;
  figure1: boolean;
  figure2: boolean;
  figure3: boolean;
  figure4: boolean;
  figure5: boolean;
  modalShow: boolean;
  constructor(
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    // this.keydown();
    this.initCorrectLetters();
  }

  ngAfterViewInit() { }

  initCorrectLetters() {
    this.wordEl = this.selectedWord
      .toLowerCase()
      .split('');

    for (let i = 0; i < this.wordEl.length; i++) {
      this.correctLetters[i] = '';
    }
    this.wrongLetters = [];
    this.playable = true;
    this.finalMessage = '';
    this.finalMessageRevealWrod = '';

    this.figure0 = false;
    this.figure1 = false;
    this.figure2 = false;
    this.figure3 = false;
    this.figure4 = false;
    this.figure5 = false;
    this.modalShow = false;
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.keycompare(event);
  }

  // keydown() {
  //   fromEvent(document, 'keypress').subscribe((e: KeyboardEvent) => {
  //     console.log(e);
  //     this.wordEl = this.selectedWord
  //       .toLowerCase()
  //       .split('');
  //     this.keycompare(e);
  //   });
  // }

  keycompare(e: KeyboardEvent) {

    if (this.playable) {
      if ((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)) {
        const letter = e.key.toLowerCase();
        if (this.wordEl.includes(letter)) {

          // tslint:disable-next-line:prefer-for-of
          for (let i = 0; i < this.wordEl.length; i++) {
            if (this.wordEl[i] === letter) {
              if (this.correctLetters[i] === letter) {
                continue;
              } else {
                this.correctLetters[i] = letter;
              }
            }
          }

          this.compare(this.wordEl, this.correctLetters);

        } else {
          if (!this.wrongLetters.includes(letter)) {
            this.wrongLetters.push(letter);
          }
          const errors = this.wrongLetters.length;
          this.figure.forEach((part, index) => {
            if (index < errors) {
              for (let i = 0; i <= index; i++) {
                this.figureStyle(i);
              }
            }
          });
          if (this.figure.length <= errors) {
            this.loseGame();
          }
        }

      }
    }
  }

  figureStyle(type: number) {
    if (type === 0) { this.figure0 = true; }
    if (type === 1) { this.figure1 = true; }
    if (type === 2) { this.figure2 = true; }
    if (type === 3) { this.figure3 = true; }
    if (type === 4) { this.figure4 = true; }
    if (type === 5) { this.figure5 = true; }
  }

  style0() {
    if (this.figure0) {
      return { display: 'block' };
    }
    return { display: 'none' };
  }

  style1() {
    if (this.figure1) {
      return { display: 'block' };
    }
    return { display: 'none' };
  }
  style2() {
    if (this.figure2) {
      return { display: 'block' };
    }
    return { display: 'none' };
  }

  style3() {
    if (this.figure3) {
      return { display: 'block' };
    }
    return { display: 'none' };
  }

  style4() {
    if (this.figure4) {
      return { display: 'block' };
    }
    return { display: 'none' };
  }

  style5() {
    if (this.figure5) {
      return { display: 'block' };
    }
    return { display: 'none' };
  }

  showModal() {
    if (this.modalShow) {
      return { display: 'block' };
    }
    return { display: 'none' };
  }

  compare(words: string[], correct: string[]) {
    const wordsTemp = words.join('');
    const correTemp = correct.join('');

    if (wordsTemp === correTemp) {
      this.finalMessage = '축하합니다. 당신이 승리 하셨습니다. !!!!';
      this.playable = false;
      this.modalShow = true;
    }
  }

  loseGame() {
    this.finalMessage = '제가 승리 하였습니다. !!!!';
    this.playable = false;
    this.modalShow = true;
  }

  restart() {
    this.initCorrectLetters();
  }

}
