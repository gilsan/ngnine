import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-play-cards',
  templateUrl: './ex-play-cards.component.html',
  styleUrls: ['./ex-play-cards.component.scss']
})
export class ExPlayCardsComponent implements OnInit {
  static label = 'Playing With a Full Deck';
  constructor() { }

  ngOnInit(): void {
  }

}
