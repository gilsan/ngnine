import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICard } from '../models/models';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-memorycard',
  templateUrl: './memorycard.component.html',
  styleUrls: ['./memorycard.component.scss'],
})
export class MemorycardComponent implements OnInit {

  cards: ICard[] = [
    { question: '첫번찌 앵귤러 앞면', answer: '첫번찌 앵귤러 뒷면' },
    { question: '두번찌 앵귤러 앞면', answer: '두번찌 앵귤러 뒷면' },
  ];
  isAddContainerShow = false;
  flip = false;
  currentIndex = 0;
  totalCard = 0;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.totalCard = this.cards.length;
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      question: [''],
      answer: [''],
    });
  }

  addCardShowToggle() {
    this.isAddContainerShow = !this.isAddContainerShow;
  }

  addCardShow() {
    if (this.isAddContainerShow) {
      return { show: true };
    }
    return { show: false };
  }

  saveCard() {
    this.cards.push(this.form.value);
    this.totalCard = this.cards.length;
    this.addCardShowToggle();
    this.form.reset();
    console.log('[][][],', this.totalCard);
  }

  flipToggle() {
    this.flip = !this.flip;
  }

  rotate() {
    console.log('[rotate]', this.flip);
    if (this.flip) {
      return { showanswer: true };
    }
    return { showanswer: false };
  }

  getCardClass(i: number) {
    if (i === this.currentIndex) {
      if (this.flip) {
        return { active: true, showanswer: true };
      } else {
        return { active: true, showanswer: false };
      }
    }
  }

  getTotal() {
    if (this.totalCard) {
      return true;
    }
    return false;
  }

  prev() {
    this.flip = false;
    if (this.currentIndex <= 0) {
      return this.currentIndex = 0;
    }
    this.currentIndex--;
  }

  next() {
    this.flip = false;
    if (this.currentIndex + 1 >= this.cards.length) {
      return this.currentIndex = this.cards.length - 1;
    }
    this.currentIndex++;
  }

  deleteCard() {
    this.cards.splice(this.currentIndex, 1);
    this.totalCard = this.cards.length;
  }

}
