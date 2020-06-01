import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecordingService } from '../recording.service';
import { Observable } from 'rxjs';
import { Record } from '../models/receive.model';

@Component({
  selector: 'coloring-mgn',
  templateUrl: './mgn.component.html',
  styleUrls: ['./mgn.component.scss']
})
export class MgnComponent implements OnInit {

  page = 1;
  pageSize = 10;
  recordingList$: Observable<Record[]>
  form: FormGroup;

  msbapTitle: string; //'시험용';
  msbapAudioUrl: string; // = 'http://221.141.251.58/mdata/2033/TTS_y625love_20140813104450.wav';
  msbapDisplayTitle = true;
  musicName: string;

  @ViewChild('modalListen') modalListen: TemplateRef<any>;
  constructor(private fb: FormBuilder,
       private rs: RecordingService,
       private modal: NgbModal
    ) { }

  ngOnInit() {

    this.getAllRecordingtList(this.page, this.pageSize);

  }


// 리스트
getAllRecordingtList(page: number, pageSize: number) {
  this.recordingList$ = this.rs.mgnList(page, pageSize);

}


// 삭제
recordingDelete( ) {}


// 새로고침
reset() {
  this.getAllRecordingtList(this.page, this.pageSize);
}

getNext() {
  this.recordingList$ = this.rs.mgnList(this.page + 1, this.pageSize);
}

listenMusic(ment) {

  const baseUrl = 'http://221.141.251.58/mdata';
  this.msbapAudioUrl = `${baseUrl}/${ment.mentCode}/${ment.fileName}`;
  this.msbapTitle = ment.title;
  this.musicName = ment.fileName;
  console.log('[93][listenMusic] : ',this.msbapAudioUrl ,this.msbapTitle);
  this.modal.open(this.modalListen, { size: 'lg'});
}

mentSearch(value: string) {
   console.log('mgn: ', value);
}



}
