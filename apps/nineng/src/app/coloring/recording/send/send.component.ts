import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecordingService } from '../recording.service';
import { Observable } from 'rxjs';
import { Send } from '../models/receive.model';

@Component({
  selector: 'coloring-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class SendComponent implements OnInit {

  page = 1;
  pageSize = 10;
  form: FormGroup;
  send$: Observable<Send[]>;

  @ViewChild('modalContent') regModal: TemplateRef<any>;
  @ViewChild('modalModiContent') modiModal: TemplateRef<any>;

  constructor(     private fb: FormBuilder,
    private rs: RecordingService,
    private modal: NgbModal) { }

  ngOnInit() {
    this.getAllSendList();
    this.form = this.fb.group({
      number:['', Validators.required],
    });
  }



// 리스트
getAllSendList() {
  this.send$ = this.rs.sendList(this.page, this.pageSize);
}

// 생성
register() {
  this.modal.open(this.regModal,  {size: 'lg'}).result.then((msg)=> {
       if (msg === 'REG') {
         this.rs.sendRegister(this.form.value)
         .subscribe((result: any)=> {
          if (result.RESULT === 'SUCCESS') {
           this.getAllSendList();
          }
      });
       }
  });
}

// 갱신
sendUpdate(send: Send) {
  this.form.setValue({number: send.number});
  this.modal.open(this.modiModal, { size: 'lg'}).result.then((msg)=> {
      if ( msg === 'MOD') {
        this.rs.sendUpdate(send.id,this.form.value)
        .subscribe((result: any)=> {
          if (result.RESULT === 'SUCCESS') {
           this.getAllSendList();
          }
      });
      }
  });

}

// 삭제
sendDelete(send: Send) {
    this.rs.sendDelete(send.id)
     .subscribe(()=> {
       this.getAllSendList();
     })
}


// 새로고침
reset() {
  this.getAllSendList();
}

getNext() {
  this.send$ = this.rs.sendList(this.page + 1, this.pageSize)
}

mentSearch(value: string) {

}

}
