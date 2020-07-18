import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-debugging',
  templateUrl: './ex-debugging.component.html',
  styleUrls: ['./ex-debugging.component.scss']
})
export class ExDebuggingComponent implements OnInit {
  static label = 'Good Grids Gone Bad';
  constructor() { }

  ngOnInit(): void {
  }

}
