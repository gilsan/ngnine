import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  showHide = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.showHide = !this.showHide;
  }

  submenu() {
    if(this.showHide) {
      return {'service-2-hide': true};
    }
    return ;
  }

  mainpart() {
    if(this.showHide) {
      return {'service-3-all': true};
    }
    return {'service-3-sub': true, 'service-3-sub-10': true};  
  }

}
