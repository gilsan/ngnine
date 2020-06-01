import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateAdapter, NgbDateNativeAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs';
import { IListColoring, IWeekday } from '../models';

import { map, tap } from 'rxjs/operators';
import { VoiceManagementService } from '../../services/voice-mangement.service';
import { FirebaseColoringService } from '../services/firebase-coloring.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-fullcalendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.scss'],
})
export class FullCalendarComponent implements OnInit {

  @ViewChild('modalContent') regModal: TemplateRef<any>;
  @ViewChild('modalUpdateContent') updateModal: TemplateRef<any>;

  page = 1;
  pageSize = 5;
  type = '';
  newFileName = '';

  fileUpload = { status: '', message: 0, filePath: '' };
  year: number = new Date().getFullYear();
  month: number = new Date().getMonth() + 1;
  day: number = new Date().getDate();
  regForm: FormGroup;
  updateForm: FormGroup;
  week: IWeekday;
  weekList$: Observable<IWeekday[]>;
  weekLists$: Observable<IWeekday[]>;
  coloringLists$: Observable<IListColoring[]>;
  constructor(
    private mentService: VoiceManagementService,
    private modal: NgbModal,
    private fb: FormBuilder,
    private fbService: FirebaseColoringService,
  ) { }

  ngOnInit() {
    this.getWeekList(this.page, this.pageSize);
    this.getColoringList();
    this.getALLWeekdayColoringList();

    this.regForm = this.fb.group({
      weekday: ['1', Validators.required],
      regdate: [{ year: this.year, month: this.month, day: this.day }, []],
      title: [],
      registerFile: [],
    });

    this.updateForm = this.fb.group({
      dtitle: ['', Validators.required],
      regDate: ['', Validators.required],
      ment_name: ['', Validators.required],
    });
  }

  // 음원목록
  getColoringList() {
    this.coloringLists$ = this.fbService.getAllColoringList();
    // this.coloringLists$.subscribe((data) => {
    //   console.log('[][full calendar][getColoringList] ', data);
    // });
  }
  // 전체 요일별 컬러링 목록
  getALLWeekdayColoringList() {
    this.weekLists$ = this.fbService.getWeekdayList()
      .pipe(
        map((items) => {
          return items.map(this.itemConvert);
        }),
      );
  }

  getWeekList(page: number, pageSize: number) {
    this.weekList$ = this.mentService.getWeekdayList(page, pageSize)
      .pipe(
        map((items) => {
          return items.map(this.itemConvert);
        }),
      );
  }

  itemConvert(item: IWeekday) {
    if (item.weekday === '1') {
      item = { ...item, weekday: '월요일' };
    } else if (item.weekday === '2') {
      item = { ...item, weekday: '화요일' };
    } else if (item.weekday === '3') {
      item = { ...item, weekday: '수요일' };
    } else if (item.weekday === '4') {
      item = { ...item, weekday: '목요일' };
    } else if (item.weekday === '5') {
      item = { ...item, weekday: '금요일' };
    }
    return item;
  }

  weekdayReg() {
    this.modal.open(this.regModal, { size: 'lg' }).result.then((msg) => {
      const id = this.regForm.get('registerFile').value.id;
      const weekday = this.regForm.get('weekday').value;
      const fileName = this.regForm.get('registerFile').value.fileName;
      const title = this.regForm.get('registerFile').value.title;
      const regDate = this.regForm.get('regdate').value.year + '-' +
        this.regForm.get('regdate').value.month + '-' + this.regForm.get('regdate').value.day;

      if (msg === 'REG') {
        this.week = {
          id: +id,
          weekday: weekday.toString(),
          fileName: fileName.toString(),
          title: title.toString(),
          regDate: regDate.toString(),
        };

        this.fbService.addWeekday(this.week)
          .subscribe(() => {
            console.log('[120][full calendar][weekdayReg]');
          });
        /*
       this.type = 'New';
       const fd = new FormData();
       // tslint:disable-next-line:max-line-length
       const registerDate = this.regForm.get('regdate').value.year + '-' +
       this.regForm.get('regdate').value.month + '-' + this.regForm.get('regdate').value.day;
       fd.append('weekday', this.regForm.get('weekday').value);
       fd.append('regdate', registerDate);
       fd.append('title', title);
       fd.append('file', fileName);

        this.mentService.putWeekdayData(fd).subscribe((event: any) => {

          if (event.type === 1) {
            this.fileUpload.status = 'progress';
            const percentDone = Math.round(100 * event.loaded / event.total);
            this.fileUpload.message = percentDone;

          } else {
            this.fileUpload.status = '';

            if (event.body !== undefined) {
              console.log(event.body.RESULT);
              this.getWeekList(this.page, this.pageSize);
            }

          }
        });
        */
      }
    });
  }

  reset() {
    this.getWeekList(this.page, this.pageSize);
  }

  checkStatus(day: number): boolean {
    let weekday: number;
    if (this.week.weekday === '월요일') { weekday = 1; } else
      if (this.week.weekday === '화요일') { weekday = 2; } else
        if (this.week.weekday === '수요일') { weekday = 3; } else
          if (this.week.weekday === '목요일') { weekday = 4; } else
            if (this.week.weekday === '금요일') { weekday = 5; }

    if (weekday === day) { return true; } else { return false; }
  }

  weekUpdate(week) {
    console.log('[191][full calendar][weekUpdate] ', week);
    this.week = week;

    const yymmdd = week.regDate.split('-');
    // tslint:disable-next-line:max-line-length
    this.updateForm.setValue({ regDate: { year: +yymmdd[0], month: +yymmdd[1], day: + yymmdd[2] }, dtitle: week.title, ment_name: '' });
    this.modal.open(this.updateModal, { size: 'lg' }).result.then((msg) => {
      if (msg === 'CHG') {
        console.log(this.updateForm.value);
      }

      /*
      if (msg === 'CHG') {
        const fd = new FormData();

        const tempDate = this.updateForm.get('regDate').value;
        const newDate = tempDate.year + '-' + tempDate.month + '-' + tempDate.day;

        fd.append('id', week.id);
        fd.append('dtitle', this.updateForm.get('title').value);
        fd.append('date', newDate);

        if (this.newFileName.length) {
          fd.append('file', this.updateForm.get('ment_name').value);
        } else {
          fd.append('ment_name', week.ment_name);
        }
        this.mentService.weekdayUpdate(fd)
          .subscribe((ans) => {
            if (ans) {
              this.getWeekList(this.page, this.pageSize);
            }

          });
      }
      */
    });
  }

  getNext() {
    this.weekList$ = this.mentService.getWeekdayList(this.page + 1, this.pageSize);
  }

  upload(event) {

    if (event.target.files.length > 0) {
      const profile = event.target.files[0];
      this.regForm.get('registerFile').setValue(profile);
    }
  }

  modiUpload(event) {

    if (event.target.files.length > 0) {
      const files = event.target.files[0];
      this.newFileName = event.target.files[0].name;
      this.updateForm.get('ment_name').setValue(files);
    }
  }

  weekDelete(week) {
    this.mentService.weekdayDelete(week.id)
      .subscribe((ans) => {
        this.getWeekList(this.page, this.pageSize);
      });
  }

}
