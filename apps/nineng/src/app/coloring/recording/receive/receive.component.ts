import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecordingService } from '../recording.service';
import { Receive } from '../models/receive.model';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'coloring-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.scss']
})
export class ReceiveComponent implements OnInit {

  page = 1;
  pageSize = 10;
  time = {hour: 8, minute: 0};
  form: FormGroup;
  clock = false;
  setClock: string ='';
  receive$: Observable<Receive[]>;

  constructor(
     private fb: FormBuilder,
     private rs: RecordingService,
     private modal: NgbModal
     ) { }

  @ViewChild('modalContent') regModal: TemplateRef<any>;
  @ViewChild('modalModiContent') modiModal: TemplateRef<any>;

  ngOnInit() {
    this.form = this.fb.group({
       phone:['', Validators.required],
       starttime: [this.time.hour, Validators.required],
       endtime: [this.time.hour, Validators.required],

    });

    this.getAllRecordingtList();
  }


// 리스트
  getAllRecordingtList() {
     this.receive$ = this.rs.receiveList(this.page, this.pageSize);
  }

  // 생성
  register() {
    this.modal.open(this.regModal,  {size: 'lg'}).result.then( msg => {
       if (msg === 'REG') {
        // console.log(this.form.value);
         this.rs.receiveRegister(this.form.value)
           .subscribe((result: any)=> {
               if (result.RESULT === 'SUCCESS') {
                this.getAllRecordingtList();
               }
           });
       }
    })
  }

  // 갱신
  recordingUpdate(data:Receive) {
    this.form.setValue({phone: data.phone , starttime:data.starttime, endtime: data.endtime});

    this.modal.open(this.modiModal, { size: 'lg'}).result.then((msg:string)=> {
          console.log(msg, this.form.value);
          this.rs.receiveUpdate(data.id, this.form.value)
            .subscribe( (result: any)=> {
              if (result.RESULT === 'SUCCESS') {
                this.getAllRecordingtList();
               }
            });
    });
  }

  // 삭제
  recordingDelete(data:Receive) {
    this.rs.receiveDelete(data.id)
      .subscribe(()=> {
        this.getAllRecordingtList();
      });
  }

  // 새로고침
  reset() {
    this.getAllRecordingtList();
  }

  getNext() {
    this.receive$ = this.rs.receiveList(this.page + 1, this.pageSize)
  }
  // 검색
  search(extension: string) {
     this.receive$ = this.rs.receiveSearch(extension);
  }

  toggle(type: string) {
      this.setClock = type;
      if (type === 'start') {
        this.time.hour = +this.form.get('starttime').value;
      } else if(type === 'end') {
        this.time.hour = +this.form.get('endtime').value;
      }
      console.log(this.time);
      this.clock = !this.clock;
  }

  closeClock() {
   // console.log(this.time);
    this.clock = !this.clock;
    if (this.setClock === 'start') {
      this.form.get('starttime').patchValue(this.time.hour)
    } else if (this.setClock === 'end') {
      this.form.get('endtime').patchValue(this.time.hour);
    }
    this.setClock = '';
  }

}
