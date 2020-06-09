import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-newyearcountdown',
  templateUrl: './newyearcountdown.component.html',
  styleUrls: ['./newyearcountdown.component.scss']
})
export class NewyearcountdownComponent implements OnInit {

  currentYear: number;
  newYearTime: Date;
  year: number;
  days: number;
  hours: string;
  minutes: string;
  seconds: string;
  isShow = false;
  constructor() { }

  @ViewChild('loading') img: ElementRef;
  ngOnInit(): void {
    this.init();
  }

  init() {
    this.currentYear = new Date().getFullYear();
    this.newYearTime = new Date(`January 01 ${this.currentYear + 1} 00:00:00`);
    this.year = this.currentYear + 1;
    setInterval(() => {
      this.img.nativeElement.remove();
      this.updateCountdown();
      this.isShow = true;
    }, 1000);
  }

  updateCountdown() {
    const currentTime = new Date();
    const diff = this.newYearTime.getTime() - currentTime.getTime();

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    this.days = d;
    this.hours = h < 10 ? '0' + h.toString() : h.toString();
    this.minutes = m < 10 ? '0' + m.toString() : m.toString();
    this.seconds = s < 10 ? '0' + s.toString() : s.toString();
  }

  showCount() {
    if (this.isShow) {
      return { display: 'flex' };
    }
  }

}
