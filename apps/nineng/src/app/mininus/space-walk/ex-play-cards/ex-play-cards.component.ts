import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-ex-play-cards',
  templateUrl: './ex-play-cards.component.html',
  styleUrls: ['./ex-play-cards.component.scss']
})
export class ExPlayCardsComponent implements OnInit {
  static label = 'Full Deck Grid';

  suits: string[] = [
    'spades',
    'hearts',
    'clubs',
    'diamonds',
  ];

  ranks: string[] =
    ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  constructor() { }

  ngOnInit(): void {
  }

}
