import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-speechtext',
  templateUrl: './speechtext.component.html',
  styleUrls: ['./speechtext.component.scss'],
})
export class SpeechtextComponent implements OnInit {

  data = [
    { image: '../../../assets/webproject/speechtext/img/drink.jpg', text: '물한잔 드세요' },
    { image: '../../../assets/webproject/speechtext/img/food.jpg', text: '피자 먹자' },
    { image: '../../../assets/webproject/speechtext/img/tired.jpg', text: '꿈꾸는 아이' },
    { image: '../../../assets/webproject/speechtext/img/hurt.jpg', text: '곰돌이 인형' },
    { image: '../../../assets/webproject/speechtext/img/happy.jpg', text: '놀라는 아이' },
    { image: '../../../assets/webproject/speechtext/img/angry.jpg', text: '웃기는 아이' },
    { image: '../../../assets/webproject/speechtext/img/sad.jpg', text: '우는 아이' },
    { image: '../../../assets/webproject/speechtext/img/scared.jpg', text: '빵사주세요' },
    { image: '../../../assets/webproject/speechtext/img/outside.jpg', text: '외출하고 싶어요' },
    { image: '../../../assets/webproject/speechtext/img/home.jpg', text: '어서 집으로 가자' },
    { image: '../../../assets/webproject/speechtext/img/school.jpg', text: '영어를 열심히 배우자' },
    { image: '../../../assets/webproject/speechtext/img/grandma.jpg', text: '보고 싶은 할머니' },
  ];

  constructor() { }
  private message = new SpeechSynthesisUtterance();

  voices = [];
  isShow = false;

  @ViewChild('textarea', { read: ElementRef }) textarea: ElementRef;

  ngOnInit(): void {
    this.init();
  }

  init() {
    window.speechSynthesis.onvoiceschanged = () => {
      this.voices = window.speechSynthesis.getVoices();
      // console.log(this.voices);
    };
  }

  selectedLang(value) {
    // console.log(this.voices[value]);
    this.message.voice = this.voices[value];
  }

  readText() {
    this.setTextMessage(this.textarea.nativeElement.value);
    this.speakText();
  }
  setTextMessage(text) {
    this.message.text = text;
  }

  speakText() {
    window.speechSynthesis.speak(this.message);
  }

  readPicture(index: { image: string, text: string }) {
    this.setTextMessage(index.text);
    this.speakText();
  }


  toggle() {
    this.isShow = !this.isShow;
  }

  showTextarea() {
    if (this.isShow) {
      return { show: true };
    }
    return { show: false };
  }

}
