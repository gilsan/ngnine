import { Component, OnInit } from '@angular/core';

import { NgAlertService } from 'libs/ng-alert/src/lib/ng-alaert.service';

@Component({
  selector: 'ngnine-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  shape: number[][];
  dynamic = 'www.google.com';

  constructor(
    private alertService: NgAlertService,
 
  ) {}

  isActive = false;
 
  ngOnInit() {
    const value = this.getRndInteger(80, 100);
    console.log('[value] : ',value)
  }

  setActive(state:boolean) {
      this.isActive = state;
  }










  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  createSuccessMessage() {
      this.alertService.createSuccessAlert('성공!!');
  }

  createDangerMessage() {
    this.alertService.createDangerAlert('경고!!');
  }

  createWarningMessage() {
    this.alertService.createWarning('주의!!');
  }

  createInfoMessage() {
    this.alertService.createInfoAlert('알림!!!');
  }


}
