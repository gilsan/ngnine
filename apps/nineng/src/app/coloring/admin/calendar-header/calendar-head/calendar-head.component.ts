import { Component, EventEmitter, Input, OnInit,  Output  } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-calendar-head',
  templateUrl: './calendar-head.component.html',
  styleUrls: ['./calendar-head.component.scss'],
})
export class CalendarHeadComponent implements OnInit {
  @Input()
  view: string;

  @Input()
  viewDate: Date;

  @Input()
  locale  = 'en';

  @Output()
  viewChange: EventEmitter<string> = new EventEmitter();

  @Output()
  viewDateChange: EventEmitter<Date> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
