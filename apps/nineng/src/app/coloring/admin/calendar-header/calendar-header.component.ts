import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbCalendar, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventAction, CalendarView } from 'angular-calendar';
import { endOfDay, startOfDay } from 'date-fns';
import { from, Observable, of, Subject } from 'rxjs';
import { IColoring } from '../models/audio.model';

import flatpickr from 'flatpickr';
import { Korean } from 'flatpickr/dist/l10n/ko.js';
import { map } from 'rxjs/operators';
import { IDateTime, IListColoring } from '../models';
import { ColoringService } from '../services/coloring.service';
import { FirebaseColoringService } from '../services/firebase-coloring.service';

flatpickr('.timeInput', {
  'locale': Korean,
});

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-calendar-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.scss'],
})
export class CalendarHeaderComponent implements OnInit {
  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  coloringList$: Observable<IListColoring[]>;
  dateColoringList$: Observable<IDateTime[]>;

  year: number = new Date().getFullYear();
  month: number = new Date().getMonth() + 1;
  day: number = new Date().getDate();
  isShow = true;

  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [];

  refresh: Subject<any> = new Subject();
  events: CalendarEvent[] = [];
  calForm: FormGroup;

  constructor(
    private coloringService: ColoringService,
    private modal: NgbModal,
    private fb: FormBuilder,
    private fbService: FirebaseColoringService,
  ) {
  }

  ngOnInit() {
    // console.log(' [102] ', this.year, this.month,this.day);
    this.calForm = this.fb.group({
      title: ['음원선택', Validators.required],
      startDay: [{ year: this.year, month: this.month, day: this.day }, Validators.required],
      endDay: [{ year: this.year, month: this.month, day: this.day }, Validators.required],
    });
    this.getColoringList();  // 음원리스트 가져오기
    this.getColoringDateList();
    this.getMonthColoringList(); // 달에 설정된 컬러링 목록
  }

  DateChange(event: Event) {
    console.log(event);
  }

  getColoringList() {
    // this.coloringList$ = this.coloringService.getColoringList() ;
    this.coloringList$ = this.fbService.listsObservable$;
  }

  getColoringDateList() {
    const today = new Date();
    const year = today.getFullYear(); // 년도
    const mm = today.getMonth() + 1;  // 월
    const dd = today.getDate();  // 날짜
    let month;
    let day: string;
    if (mm < 10) {
      month = '0' + mm;
    } else {
      month = mm;
    }

    if (dd < 10) {
      day = '0' + dd;
    } else {
      day = dd.toString();
    }
    const now = year + '-' + month + '-' + day;

    this.dateColoringList$ = this.fbService.getAllRegColoringList()
      .pipe(
        map((lists) => {
          return lists.filter((list) => list.sdate === now.toString() || new Date(list.edate) > new Date(now));
        }),
      );
  }

  convert(edate, now) {
    const endDate = new Date(edate);
    const today = new Date(now);


  }

  getMonthColoringList() {
    //  this.coloringService.getMonthMentList()
    this.dateColoringList$
      .subscribe((res: any) => {
        if (res === null) {
          ;
        } else {
          res.forEach((item) => {
            const start = new Date(item.sdate);
            const end = new Date(item.edate);
            this.events.push({
              start: startOfDay(start),
              end: endOfDay(end),
              title: `${item.dtitle}-${item.ment_name}-${item.idx}`,
              cssClass: item.id
            });
          });
          this.refresh.next(this.events);
        }
      });
  }

  myCheck(day: any) {
    if (day.events.length) {
      return true;
    } else {
      return false;
    }
  }

  showTitle(title, day) {
    const idFileName = title.split('-');
    return idFileName[0];
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (events.length) {
      const startYear: number = events[0].start.getFullYear();
      const startMonth: number = events[0].start.getMonth() + 1;
      const startDay: number = events[0].start.getDate();

      const endYear: number = parseInt(events[0].end.toISOString().substring(0, 4), 0);
      const endMonth: number = parseInt(events[0].end.toISOString().substring(5, 7), 0);
      const endDay: number = parseInt(events[0].end.toISOString().substring(8, 10), 0);

      this.isShow = false;
      this.calForm.setValue({
        startDay: { year: startYear, month: startMonth, day: startDay },
        endDay: { year: endYear, month: endMonth, day: endDay },
        title: events[0].title,
      });

    } else {
      const startYear: number = date.getFullYear();
      const startMonth: number = date.getMonth() + 1;
      const startDay: number = date.getDate();

      const endYear: number = date.getFullYear();
      const endMonth: number = date.getMonth() + 1;
      const endDay: number = date.getDate();

      this.isShow = true;
      this.calForm.setValue({
        startDay: { year: startYear, month: startMonth, day: startDay },
        endDay: { year: endYear, month: endMonth, day: endDay },
        title: '',
      });
    }

    this.modal.open(this.modalContent, { size: 'lg' }).result.then((result) => {
      if (result === 'ADD') {
        this.coloringInfoProc('ADD', date);
        this.isShow = true;
      } else if (result === 'UPDATE') {
        this.coloringInfoProc('UPDATE', date);
        this.isShow = true;
      } else if (result === 'DELETE') {
        console.log('DELETE :', date);
        this.coloringInfoProc('DELETE', date);
      }
    });
  }

  coloringInfoProc(type: string, dateIndex: Date) {
    // tslint:disable-next-line:max-line-length
    const conId = this.events.findIndex((event) => event.start.toISOString().substring(0, 10) === dateIndex.toISOString().substring(0, 10));
    console.log('[196] : ', type, dateIndex);
    let id = '';
    if (conId > 0) {
      id = this.events[conId].cssClass;
    }
    // tslint:disable-next-line:max-line-length
    const startDay: any = this.calForm.value.startDay.year + '-' + this.calForm.value.startDay.month + '-' + this.calForm.value.startDay.day;
    // tslint:disable-next-line:max-line-length
    const endDay: any = this.calForm.value.endDay.year + '-' + this.calForm.value.endDay.month + '-' + this.calForm.value.endDay.day;
    const title = this.calForm.value.title;
    if (type === 'ADD') {
      this.events = [...this.events, {
        start: startOfDay(startDay),
        end: endOfDay(endDay),
        title: this.calForm.value.title,
        // actions: this.actions,
      }];
    } else if (type === 'UPDATE') {
      const newEvents = this.events.slice();
      this.events = [...this.events.slice(0, conId),
      ...this.events.slice(conId + 1, this.events.length),
      {
        start: startOfDay(startDay),
        end: endOfDay(endDay),
        title: this.calForm.value.title,
        // actions: this.actions,
      }];
      console.log('[223][coloringInfoProc]: ', type);
      console.log('[224][coloringInfoProc]: ', this.calForm.value);
      console.log('[225][coloringInfoProc]: ', this.events);
    }

    this.refresh.next();
    this.calForm.reset({
      startDay: { year: this.year, month: this.month, day: this.day },
      endDay: { year: this.year, month: this.month, day: this.day },
      title: '',
    });
    const idFileName = title.split('-');
    if (type === 'ADD') {
      this.coloringService.coloringInsert(startDay, endDay, idFileName[0], idFileName[1])
        .subscribe((res: any) => {
          //  console.log('[198][coloringInfoProc]:  ', res);
          this.getMonthColoringList();
        });

    } else if (type === 'UPDATE') {
      console.log('[241][coloringInfoProc] :', this.events[conId], title);
      this.coloringService.coloringUpdate(id, startDay, endDay, idFileName[0], idFileName[1])
        .subscribe((res: any) => {
          // console.log('[205][UPDATE] :' ,res);
          this.getMonthColoringList();
        });

    } else if (type === 'DELETE') {
      this.coloringService.coloringDelete(id)
        .subscribe((res: any) => {
          console.log('[213][DELETE] : ', id, res);
          this.getMonthColoringList();
        });
    }
  }
  // eventTimesChanged ({  event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
  //    this.events = this.events.map(iEvent => {
  //      if (iEvent === event) {
  //        return {  ...event, start: newStart, end: newEnd };
  //      }
  //      return iEvent;
  //    });
  //    this.handleEvent('Dropped or resized', event);
  // }

  // handleEvent(action: string, event: CalendarEvent): void {
  //   console.log('handleEvent, ', event);
  //   this.modalData = { event, action};
  //   this.modal.open(this.modalContent, { size: 'lg'});
  // }

  // addEvent(): void {

  //   this.events = [  {
  //      title: 'New event',
  //      start: startOfDay(new Date()),
  //      end: endOfDay(new Date()),
  //      actions: this.actions,
  //      color: colors.red,
  //      draggable: true,
  //      resizable: {
  //        beforeStart: true,
  //        afterEnd: true
  //      }
  //   } ];
  // }

  // eventClicked({ event }: { event: CalendarEvent }): void {
  //   console.log('Event clicked', event);
  // }

  // deleteEvent(eventToDelete: CalendarEvent) {
  //   this.events = this.events.filter(event => event !== eventToDelete);
  // }

  // setView(view: CalendarView) {
  //    this.view = view;
  // }

  // closeOpenMonthViewDay() {
  //   this.activeDayIsOpen = false;
  // }
}
