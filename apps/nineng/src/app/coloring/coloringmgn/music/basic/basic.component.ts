import { FormBuilder, FormGroup } from '@angular/forms';
// tslint:disable-next-line:ordered-imports
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { IColoring } from '../../../admin/models/audio.model';
import { VoiceManagementService } from '../../../services/voice-mangement.service';
// tslint:disable-next-line:ordered-imports
import { FirebaseColoringService } from '../../../admin/services/firebase-coloring.service';
// tslint:disable-next-line:ordered-imports
import { IColoringList, IListColoring } from '../../../admin/models';
// tslint:disable-next-line:ordered-imports
import { tap, map } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'coloring-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  page = 1;
  pageSize = 5;
  fileUpload = { status: '', message: 0, filePath: '' };
  type = '';
  modiDate;

  modiTitle: string;
  model: Date;
  newFileName = '';
  musicName: string;
  mentList$: Observable<IColoring[]>;
  coloringLists$: Observable<IListColoring[]>;
  coloringLists: IListColoring[] = [];
  coloringItem: IListColoring[] = [];
  msbapTitle: string; // '시험용';
  msbapAudioUrl: string; // = 'http://221.141.251.58/mdata/2033/TTS_y625love_20140813104450.wav';

  msbapDisplayTitle = true;

  regForm: FormGroup;
  modifyForm: FormGroup;
  isShow = true;
  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  @ViewChild('modalModiContent') modalModiContent: TemplateRef<any>;
  @ViewChild('modalListen') modalListen: TemplateRef<any>;

  constructor(
    private mentService: VoiceManagementService,
    private fb: FormBuilder,
    private modal: NgbModal,
    private fbService: FirebaseColoringService,
  ) { }

  ngOnInit() {
    const today = new Date().toISOString().slice(0, 10);
    this.regForm = this.fb.group({
      registerDate: [today, []],
      registerTitle: [],
      registerFile: [],
    });

    this.modifyForm = this.fb.group({
      modifyDate: [],
      modifyTitle: [],
    });

    this.getColoringList();
    this.getListColoring();
  }

  getListColoring() {
    // this.coloringLists$ = this.fbService.listsObservable$
    this.mentService.getAllListColoring()
      .pipe(
        tap((data) => {
          // console.log('[][getListColoring]', data);
          this.coloringLists = data;
        }),
        map((lists) => this.coloringLists.slice((this.page - 1) * this.pageSize, this.page * this.pageSize)),
      ).subscribe((data) => {
        console.log(data);
        this.coloringItem = data;
      });
  }

  coloringSearch(ment_name: string) {
    const ment = this.coloringLists.filter((list) => list.dtitle === ment_name);
    if (ment.length > 0) {
      this.coloringLists$ = of(ment);
    } else {
      this.isShow = false;
    }
  }

  getColoringList() {
    this.mentList$ = this.mentService.getColoringList(this.page, this.pageSize);
  }

  coloringReg() {
    this.modal.open(this.modalContent, { size: 'lg' }).result.then((msg) => {
      if (msg === 'REG') {
        // console.log('[42][등록값]: ', msg);
        this.type = 'New';
        const fd = new FormData();
        fd.append('registerDate', this.regForm.get('registerDate').value);
        fd.append('registerTitle', this.regForm.get('registerTitle').value);
        fd.append('file', this.regForm.get('registerFile').value);

        this.mentService.putColoringData(fd).subscribe((event: any) => {
          if (event.type === 1) {
            this.fileUpload.status = 'progress';
            const percentDone = Math.round(100 * event.loaded / event.total);
            this.fileUpload.message = percentDone;
            // console.log('[52][coloringReg]: ', percentDone + '%');
            // alert('화일 올리기를 수행했습니다. !!!');
          } else {
            this.fileUpload.status = '';
          }
        });
      }
    });
  }

  mentSearch(title: string) {
    this.mentList$ = this.mentService.memtSearch(title);
  }

  reset() {
    this.getListColoring();
  }

  listenMusic(ment) {
    console.log('[135][listenMusic] : ', ment);
    const baseUrl = 'https://cors-anywhere.herokuapp.com/http://221.141.251.58/mdata';
    this.msbapAudioUrl = `${baseUrl}/${ment.ment_code}/${ment.ment_name}`;
    this.msbapTitle = ment.dtitle;
    this.musicName = ment.ment_name;
    console.log('[140][listenMusic] : ', this.msbapAudioUrl, this.msbapTitle);
    this.modal.open(this.modalListen, { size: 'lg' });
  }

  itemModi(item: IColoring) {
    // console.log('[76][itemModi 수정]: ', item);
    this.type = 'Modi';
    this.modiDate = item.regDate;
    this.modiTitle = item.title;
    this.modal.open(this.modalModiContent, { size: 'lg' }).result.then((newType) => {

      if (newType === 'REG') {
        const fd = new FormData();
        fd.append('id', item.id);
        fd.append('date', this.modiDate);
        fd.append('title', this.modiTitle);
        if (this.newFileName.length) {
          fd.append('file', this.newFileName);
        } else {
          fd.append('ment_name', item.fileName);
        }

        this.mentService.mentUpdate(fd).subscribe((result: any) => {
          if (result.RESULT === 'SUCCESS') {
            this.getColoringList();
            alert('갱신 했습니다.');
          } else if (result.RESULT === 'FAIL') {
            alert('갱신히지 못 했습니다.');
          }
        });
      }
    });
  }

  itemDel(item: IListColoring) {
    // console.log('[78][itemDel]: ', item);
    const result = confirm('정말 삭제 하시겠습니까?');
    if (result) {
      this.fbService.deleteColoring(item.idx)
        .subscribe((data) => {
          console.log('[][][delete] ', data);
        });
      // this.mentService.mentDelete(item.id)
      // tslint:disable-next-line:no-shadowed-variable
      // .subscribe( (result: any) => {
      //      if (result.RESULT === 'SUCCESS') {
      //        this.getColoringList();
      //        alert('갱신 했습니다.');
      //      } else if (result.RESULT === 'FAIL') {
      //        alert('갱신히지 못 했습니다.');
      //      }
      // });
    }
  }

  upload(event) {
    console.log('[82][event]: ', event.target.files);
    if (event.target.files.length > 0) {
      const profile = event.target.files[0];
      this.regForm.get('registerFile').setValue(profile);
    }
  }

  modiUpload(event) {
    console.log('[90][event]: ', event.target.files[0].name);
    this.newFileName = event.target.files[0].name;
  }

  // getNext() {
  //   this.mentList$ = this.mentService.getColoringList(this.page + 1, this.pageSize);
  // }

  getNext(pageNum: number) {
    this.coloringLists$ = of(this.coloringLists)
      .pipe(
        map((lists) => this.coloringLists.slice(
          (pageNum - 1) * this.pageSize, pageNum * this.pageSize)),
      );
  }

}
