import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-transform',
  templateUrl: './ex-transform.component.html',
  styleUrls: ['./ex-transform.component.scss']
})
export class ExTransformComponent implements OnInit {
  static label = 'I Want to Break Free';
  constructor() { }

  ngOnInit(): void {
  }

}
