import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moviceseat',
  templateUrl: './moviceseat.component.html',
  styleUrls: ['./moviceseat.component.scss'],
})
export class MoviceseatComponent implements OnInit {

  map: number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];
  movieList = [
    { title: 'Avengers: Endgame (7,000원)', price: 7000 },
    { title: 'Joker (8,000원)', price: 8000 },
    { title: 'Toy Story (9,000원)', price: 9000 },
    { title: 'Lion King  (10,000원)', price: 10000 },
  ];

  statusSeat = ['좌석', '선택', '예약'];

  toal_seat = 0;
  total_reserved_seat = 0;
  selected_movie = 0;
  total_price = 0;
  movieIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.retriveMap();
  }

  saveSeat(index, mapping) {
    localStorage.setItem('movieIndex', index);
    localStorage.setItem('movieMap', JSON.stringify(this.map));
    localStorage.setItem('totalSeat', this.total_reserved_seat.toString());

  }

  retriveMap() {
    this.movieIndex = +localStorage.getItem('movieIndex');
    this.total_reserved_seat = +localStorage.getItem('totalSeat');
    this.map = JSON.parse(localStorage.getItem('movieMap'));
    if (!this.map) {
      this.map = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
      ];
    }

    this.total_price = this.movieList[this.movieIndex].price;
  }

  reset() {
    // this.map =  [0, 0, 0, 0, 0, 0, 0, 0].slice(0);
    this.map = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ];
    this.total_reserved_seat = 0;
    this.total_price = 0;
    // this.movieIndex = 0;
  }

  selected(row: number, column: number) {
    if (this.total_reserved_seat < 0) {
      this.total_reserved_seat = 0;
    }
    const value = this.map[row][column];
    if (value === 0) {
      this.map[row][column] = 1;
      this.total_reserved_seat += 1;
      this.saveSeat(this.movieIndex, this.map);
      return;
    }
    this.map[row][column] = 0;
    this.total_reserved_seat -= 1;
    this.saveSeat(this.movieIndex, this.map);
  }

  onChange(movieList: string) {
    console.log(movieList);
    const [price, movieindex] = movieList.split('-');
    this.movieIndex = +movieindex;
    this.reset();
    this.saveSeat(movieindex, this.map);
    this.total_price = +price;
  }

  seatStatus(row: number, column: number) {
    const value = this.map[row][column];
    if (value === 1) {
      return { selected: true };
    }
  }

}
