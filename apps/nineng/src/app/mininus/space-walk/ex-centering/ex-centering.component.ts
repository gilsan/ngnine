import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-centering',
  templateUrl: './ex-centering.component.html',
  styleUrls: ['./ex-centering.component.scss']
})
export class ExCenteringComponent implements OnInit {
  static label = 'Grid  위치: 중앙';
  constructor() { }

  ngOnInit(): void {
  }

}
