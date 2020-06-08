import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-relaxer',
  templateUrl: './relaxer.component.html',
  styleUrls: ['./relaxer.component.scss']
})
export class RelaxerComponent implements OnInit {

  totalTime = 7500;
  breatheTime = (this.totalTime / 5) * 2;
  holdTime = this.totalTime / 5;
  breath = '';
  sizing: boolean;

  constructor() { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    setInterval(() => {
      this.breath = '숨 들이쉬기';
      this.sizing = true;

      setTimeout(() => {
        this.breath = '숨 참기';

        setTimeout(() => {
          this.breath = '숨 내쉬기';
          this.sizing = false;

        }, this.holdTime);
      }, this.breatheTime);
    }, this.totalTime);
  }



  showSize() {
    if (this.sizing) {
      return { grow: true, shrink: false };
    }
    return { grow: false, shrink: true };
  }

}
