import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-sandbox',
  templateUrl: './ex-sandbox.component.html',
  styleUrls: ['./ex-sandbox.component.scss']
})
export class ExSandboxComponent implements OnInit {
  static label = 'Some Assembly Required';
  constructor() { }

  ngOnInit(): void {
  }

}
