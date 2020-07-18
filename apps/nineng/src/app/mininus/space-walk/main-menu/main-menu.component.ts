import { Component, OnInit } from '@angular/core';
import { exams } from '../samples';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  lists = exams;
  constructor() { }

  ngOnInit(): void {
  }

}
