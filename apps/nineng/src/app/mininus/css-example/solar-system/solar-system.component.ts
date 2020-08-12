import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solar-system',
  templateUrl: './solar-system.component.html',
  styleUrls: ['./solar-system.component.scss']
})
export class SolarSystemComponent implements OnInit {

  private x: number = window.innerWidth / 2;
  private y: number = window.innerHeight / 2;
  constructor() { }

  ngOnInit(): void {
  }

  sun() {
    return { 'left': this.x - 35 + 'px', 'top': this.y - 35 + 'px' };
  }

  mercury() {
    return { 'left': this.x - 100 + 'px', 'top': this.y - 100 + 'px' };
  }

  venus() {
    return { 'left': this.x - 130 + 'px', 'top': this.y - 130 + 'px' };
  }

  earth() {
    return { 'left': this.x - 160 + 'px', 'top': this.y - 160 + 'px' };
  }

  mars() {
    return { 'left': this.x - 190 + 'px', 'top': this.y - 190 + 'px' };
  }

  jupiter() {
    return { 'left': this.x - 220 + 'px', 'top': this.y - 220 + 'px' };
  }

  saturn() {
    return { 'left': this.x - 260 + 'px', 'top': this.y - 260 + 'px' };
  }

  uranus() {
    return { 'left': this.x - 300 + 'px', 'top': this.y - 300 + 'px' };
  }

  neptune() {
    return { 'left': this.x - 340 + 'px', 'top': this.y - 340 + 'px' };
  }

}
