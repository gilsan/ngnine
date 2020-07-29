import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotate',
  templateUrl: './rotate.component.html',
  styleUrls: ['./rotate.component.scss']
})
export class RotateComponent implements OnInit {

  side = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggle() {
    //  console.log(this.side);
    this.side = !this.side;
  }

  checkStatus() {
    if (this.side) {
      return { flipped: false };
    }
    return { flipped: true };
  }

}
