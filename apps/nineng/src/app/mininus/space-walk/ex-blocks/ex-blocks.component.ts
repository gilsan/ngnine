import { Component, OnInit } from '@angular/core';
import { portfolios } from './data';
import { Portfolios } from './model';


@Component({
  selector: 'app-ex-blocks',
  templateUrl: './ex-blocks.component.html',
  styleUrls: ['./ex-blocks.component.scss']
})
export class ExBlocksComponent implements OnInit {
  static label = '블럭형 Grid';

  labels: string[] = [];

  folios: Portfolios[];
  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i < 30; i++) {
      this.labels.push('' + i);
    }
  }

}
