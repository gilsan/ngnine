import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-welcom',
  templateUrl: './welcom.component.html',
  styleUrls: ['./welcom.component.scss'],
})
export class WelcomComponent implements OnInit {

  private currentExIndex = -1;
  constructor() { }

  ngOnInit(): void {
  }

}
