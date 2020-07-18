import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-spanning',
  templateUrl: './ex-spanning.component.html',
  styleUrls: ['./ex-spanning.component.scss']
})
export class ExSpanningComponent implements OnInit {
  static label = 'It\'s All Going According to Span';
  constructor() { }

  ngOnInit(): void {
  }

}
