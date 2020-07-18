import { Component, OnInit } from '@angular/core';
import { portfolios } from './data';
import { Portfolios } from './model';


@Component({
  selector: 'app-ex-blocks',
  templateUrl: './ex-blocks.component.html',
  styleUrls: ['./ex-blocks.component.scss']
})
export class ExBlocksComponent implements OnInit {
  static label = 'Playing With Blocks';

  folios: Portfolios[];
  constructor() { }

  ngOnInit(): void {
    this.folios = portfolios;
  }

}
