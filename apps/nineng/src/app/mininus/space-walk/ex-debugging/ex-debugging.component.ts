import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-debugging',
  templateUrl: './ex-debugging.component.html',
  styleUrls: ['./ex-debugging.component.scss']
})
export class ExDebuggingComponent implements OnInit {
  static label = '자유형Grid';
  constructor() { }
  labels: string[] = [];
  ngOnInit(): void {
    for (let i = 1; i < 30; i++) {
      this.labels.push('' + i);
    }
  }

}
