// tslint:disable-next-line:ordered-imports
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { IColoringList, IDateTime } from '../models';
import { ColoringService } from '../services/coloring.service';
import { FirebaseColoringService } from '../services/firebase-coloring.service';
// tslint:disable-next-line:ordered-imports
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'coloring-coloringlist',
  templateUrl: './coloringlist.component.html',
  styleUrls: ['./coloringlist.component.scss']
})
export class ColoringlistComponent implements OnInit {

  @ViewChild('modalListen') modalListen: TemplateRef<any>;
  mentList$: Observable<IColoringList>;
  mentLists$: Observable<IDateTime[]>;
  isShow = true;
  page = 1;
  pageSize = 5;
  mentLists: IDateTime[];
  msbapTitle: string; // '시험용';
  msbapAudioUrl: string; // = 'http://221.141.251.58/mdata/2033/TTS_y625love_20140813104450.wav';
  msbapDisplayTitle = true;
  musicName: string;

  constructor(
    private coloringService: ColoringService,
    private modal: NgbModal,
    private fbService: FirebaseColoringService,
  ) { }

  ngOnInit() {
    this.getColoringList();
  }

  getColoringList() {
    this.mentLists$ = this.fbService.getAllRegColoringList()
      .pipe(
        tap((data) => {
          this.mentLists = data;
        }),
        map((lists) => this.mentLists.slice((this.page - 1) * this.pageSize, this.page * this.pageSize)),
      );
  }

  mentSearch(ment_name: string) {
    // this.mentList$ = this.coloringService.memtSearch(title);
    const ment = this.mentLists.filter((list) => list.dtitle === ment_name);
    if (ment.length > 0) {
      this.mentLists$ = of(ment);
    } else {
      this.isShow = false;
    }
  }

  reset() {
    this.getColoringList();
    this.isShow = true;
  }

  listenMusic(ment) {
    console.log(ment);
    const baseUrl = 'http://221.141.251.58/mdata';
    this.msbapAudioUrl = `${baseUrl}/${ment.ment_code}/${ment.ment_name}`;
    this.msbapTitle = ment.dtitle;
    this.musicName = ment.ment_name;
    this.modal.open(this.modalListen, { size: 'lg' });
  }

  getNext(pageNum: number) {
    this.mentLists$ = of(this.mentLists)
      .pipe(
        map((lists) => this.mentLists.slice((pageNum - 1) * this.pageSize, pageNum * this.pageSize)),
      );
  }
}
