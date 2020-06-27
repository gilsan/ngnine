import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'b-comp',
  styleUrls: ['./b.component.scss'],
  templateUrl: './b.component.html',
})
export class BComponent implements OnInit {

  title = '';
  url = '';
  currentPage = 0;

  images = [
    {
      title: '해변에서',
      // tslint:disable-next-line: max-line-length
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: ' 푸른하늘',
      // tslint:disable-next-line: max-line-length
      url: 'https://images.unsplash.com/photo-1505051508008-923feaf90180?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: '우주',
      // tslint:disable-next-line: max-line-length
      url: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
  ];

  constructor() { }
  ngOnInit(): void { }

  showImage(data: { title: string, url: string }) {

    this.title = data.title;
    this.url = data.url;

  }


}
