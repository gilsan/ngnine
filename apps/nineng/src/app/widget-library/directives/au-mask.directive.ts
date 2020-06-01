import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {maskDigitValidators, neverValidator} from './digit_validators';
import {
  BACKSPACE,
  DELETE,
  LEFT_ARROW,
  overWriteCharAtPosition,
  RIGHT_ARROW,
  SPECIAL_CHARACTERS,
  TAB,
} from "./mask.utility";

@Directive({
  selector: '[au-mask]'
})
export class AuMaskDirective implements OnInit {

  @Input('au-mask')
  mask = '';

  input: HTMLInputElement;
  fullFieldSelect = false;

  constructor(
     private el: ElementRef,
  ) {
     this.input = el.nativeElement;
  }

  ngOnInit() {
     this.input.value = this.buildPlaceHolder();
  }

   @HostListener('select', ['$event'])
   onSelect($event: UIEvent) {
      this.fullFieldSelect = this.input.selectionStart && this.input.selectionEnd === this.input.value.length;
   }


  @HostListener("keydown",['$event', '$event.keyCode'])
  onKeyDown($event: KeyboardEvent, keyCode) {

    if ($event.metaKey || $event.ctrlKey) {
        return;
    }

    if (keyCode !== TAB) {
        $event.preventDefault();
     }
    const key = String.fromCharCode(keyCode);
    const cursorPos = this.input.selectionStart;

    if (this.fullFieldSelect) {
        this.input.value = this.buildPlaceHolder();
        const firstPlaceholderPos = _.findIndex(this.input.value, (char: string) => char === '_');
        this.input.setSelectionRange(firstPlaceholderPos, firstPlaceholderPos);

     }


    switch (keyCode) {
       case LEFT_ARROW:
          this.handleLeftArrow(cursorPos);
          return;
       case RIGHT_ARROW:
          this.handleRightArrow(cursorPos);
          return;
       case BACKSPACE:
          this.handleBackspace(cursorPos);
          return;
       case DELETE:
          this.handleDelete(cursorPos);
          return;
     }

    const maskDigit = this.mask.charAt(cursorPos);
    const digitValidator = maskDigitValidators[maskDigit] || neverValidator;
     // console.log(digitValidator);
    if (digitValidator(key)) {
       overWriteCharAtPosition(this.input,cursorPos, key);
       this.handleRightArrow(cursorPos);
     }

  }

  handleBackspace(cursorPos) {
    const previousPos = this.calculatePreviousCursorPos(cursorPos);
    if (previousPos >= 0) {
      overWriteCharAtPosition(this.input,previousPos, '_');
      this.input.setSelectionRange(previousPos, previousPos);
    }
  }

  calculatePreviousCursorPos(cursorPos) {
    const valueBeforeCursor = this.input.value.slice(0,cursorPos);
    return  _.findLastIndex(valueBeforeCursor, char=> !_.includes(SPECIAL_CHARACTERS,char));
  }

  handleLeftArrow(cursorPos) {
    const previousPos = this.calculatePreviousCursorPos(cursorPos);
    if (previousPos >= 0) {
        this.input.setSelectionRange(previousPos, previousPos);
      }
  }

  handleDelete(cursorPos) {
    overWriteCharAtPosition(this.input,cursorPos, '_');
    this.input.setSelectionRange(cursorPos,cursorPos);
  }

  handleRightArrow(cursorPos) {
    const valueAfterCursor = this.input.value.slice(cursorPos + 1);
    const nextPos = _.findLastIndex(valueAfterCursor, (char: any) => !_.includes(SPECIAL_CHARACTERS, char));
    if (nextPos >= 0) {
      const newCursorPos = cursorPos + 1;
      this.input.setSelectionRange(newCursorPos, newCursorPos);
    }
  }



  buildPlaceHolder() {
     const chars = this.mask.split('');
     const value = chars.reduce((result, char) => {
        return  result += _.includes(SPECIAL_CHARACTERS, char) ? char : '_';
     }, '');
     return value;
  }


}
