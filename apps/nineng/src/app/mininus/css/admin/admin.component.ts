import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  moveLeft = false;
  leftDisplay: string;
  rightDisplay: string;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.moveLeft = !this.moveLeft;
  }

  leftArrow() {    
    if (this.moveLeft) {
     return  {'display':'none', 'transition': 'all 1s ease'};      
    } 
    return {'display': 'block', 'transition': 'all 1s ease'};
  }

  rightArrow() {
    if (this.moveLeft) {
      return {'display':'block', 'transition': 'all 1s ease'};
    }
    return {'display': 'none', 'transition': 'all 1s ease'};
  }

  classCtrl() {
    if (this.moveLeft) {
      return "no-menu";
    }
    return;
  }

  ctrlHeader() {
    if (this.moveLeft) {
      return {'flex': '0 0 5rem', 'transition': 'all 1s ease'};
    }
    return ;
  }

  

}
