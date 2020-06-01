// tslint:disable-next-line:ordered-imports
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import { IDepart } from '../../../admin/models';
import { FirebaseColoringService } from '../../../admin/services/firebase-coloring.service';
import { VoiceManagementService } from '../../../services/voice-mangement.service';
import { IListColoring } from './../../../admin/models/coloring.model';

@Component({
  selector: 'coloring-depart',
  templateUrl: './depart.component.html',
  styleUrls: ['./depart.component.scss'],
})
export class DepartComponent implements OnInit {

  page = 1;
  pageSize = 10;
  type = '';
  regForm: FormGroup;
  deptLists: any;
  newDeptLists: any;
  colorings: any;
  departList$: Observable<IDepart[]>;
  coloringLists$: Observable<IListColoring[]>;

  @ViewChild('modalContent') regModal: TemplateRef<any>;
  @ViewChild('modalModiContent') modiModal: TemplateRef<any>;
  constructor(
    private mentService: VoiceManagementService,
    private modal: NgbModal,
    private fb: FormBuilder,
    private fbService: FirebaseColoringService,
  ) { }

  ngOnInit() {
    this.regForm = this.fb.group({
      phone: ['', Validators.required],
      ment: ['', Validators.required],
    });
    this.mentService.departPhoneList()
      .subscribe((lists) => {
        this.deptLists = lists;
      });

    // this.mentService.getAllListColoring()
    //   .subscribe( (ments) => {
    //     this.colorings = ments;
    //   });
    this.getColoringList();
    this.getDepartList();

  }
  // 음원목록
  getColoringList() {
    this.coloringLists$ = this.fbService.getAllColoringList();
  }

  // 부서 목록
  getDepartList() {
    this.departList$ = this.mentService.getDepartList(this.page, this.pageSize);
  }

  // 부서별 등록화면
  departReg() {
    this.modal.open(this.regModal, { size: 'lg' }).result.then((msg) => {
      if (msg === 'REG') {
        this.mentService.registerDepartment(this.regForm.value)
          .subscribe((res: any) => {
            if (res.RESULT === 'SUCCESS') {
              this.getDepartList();
            }
          });
      }
    });
  }
  // 부서 수정화면
  departUpdate(depart) {
    // 부서 전화번호로 부서정보 찿음
    const deptIndex = this.deptLists.findIndex((item) => item.tel === depart.tel);
    const indexContent = this.deptLists.slice(deptIndex, deptIndex + 1);
    // 음원으로 음원정보 찿음
    const mentIndex = this.colorings.findIndex((item) => item.ment_name === depart.ment_name);
    const indexMent = this.colorings.slice(mentIndex, mentIndex + 1);

    // 부서 리스트 순서변환
    // tslint:disable-next-line:max-line-length
    this.deptLists = [...this.deptLists.slice(deptIndex, deptIndex + 1), ...this.deptLists.slice(0, deptIndex), ...this.deptLists.slice(deptIndex + 1, this.deptLists.length)];

    this.regForm.setValue({ phone: indexContent[0], ment: indexMent[0] });

    this.modal.open(this.modiModal, { size: 'lg' }).result.then((msg) => {
      if (msg === 'MOD') {
        this.mentService.updateDepartment(depart.id, this.regForm.value)
          .subscribe((res: any) => {
            if (res.RESULT === 'SUCCESS') {
              this.getDepartList();
            }
          });
      }
    });
  }

  // 부서 삭제
  departDelete(depart) {

    if (confirm('정말로 삭제 하시겠습니까?')) {
      this.mentService.deleteDeprtment(depart.id)
        .subscribe((res: any) => {
          if (res.RESULT === 'SUCCESS') {
            this.getDepartList();
          }
        });
    }
  }

  // 새로고침
  reset() {
    this.getDepartList();
  }

  getNext() {
    this.departList$ = this.mentService.getDepartList(this.page + 1, this.pageSize);
  }

}
