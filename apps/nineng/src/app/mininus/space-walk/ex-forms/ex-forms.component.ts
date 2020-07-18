import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-forms',
  templateUrl: './ex-forms.component.html',
  styleUrls: ['./ex-forms.component.scss']
})
export class ExFormsComponent implements OnInit {
  static label = 'Plato Would be Proud';
  constructor() { }

  ngOnInit(): void {
  }

}
