import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  private deg = 6;
  private hh = 0;
  private mm = 0;
  private ss = 0;

  constructor() { }

  ngOnInit(): void {
    this.init();
  }

  getTime() {
    const day = new Date();
    this.hh = day.getHours() * 30;
    this.mm = day.getMinutes() * this.deg;
    this.ss = day.getSeconds() * this.deg;

  }

  init() {
    setInterval(() => this.getTime(), 1000);
  }

  hhAngle() {
    return { 'transform': 'rotateZ(' + this.hh + 'deg)' };
  }

  mmAngle() {
    return { 'transform': 'rotateZ(' + this.mm + 'deg)' };
  }

  ssAngle() {
    return { 'transform': 'rotateZ(' + this.ss + 'deg)' };
  }



}
