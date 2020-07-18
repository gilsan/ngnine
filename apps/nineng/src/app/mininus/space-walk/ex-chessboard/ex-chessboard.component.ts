import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-chessboard',
  templateUrl: './ex-chessboard.component.html',
  styleUrls: ['./ex-chessboard.component.scss']
})
export class ExChessboardComponent implements OnInit {
  static label = 'The Grid of Kings';
  constructor() { }

  ngOnInit(): void {
  }

}
