import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ILib } from '../../../admin/models/coloring.model';
import { VoiceManagementService } from '../../../services/voice-mangement.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'coloring-lib',
  templateUrl: './lib.component.html',
  styleUrls: ['./lib.component.scss'],
})
export class LibComponent implements OnInit {

  page = 1;
  pageSize = 10;
  colorings: any;

  regForm: FormGroup;
  libList$: Observable<ILib[]>;

  @ViewChild('modalContent') regModal: TemplateRef<any>;
  @ViewChild('modalModiContent') modiModal: TemplateRef<any>;
  constructor(
    private mentService: VoiceManagementService,
    private modal: NgbModal,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.regForm = this.fb.group({
      gym_lib_name: ['', Validators.required],
      extension: ['', Validators.required],
      offday: ['1', Validators.required],
      ment: ['', Validators.required],
    });

    this.mentService.getAllListColoring()
    .subscribe( (ments) => {

      this.colorings = ments;
    });
    this. getAllLibList();
  }

  getAllLibList() {
     this.libList$ =  this.mentService.getLibList(this.page, this.pageSize);
  }

  libReg() {
    console.log('libReg');
    this.modal.open(this.regModal,  {size: 'lg'}).result.then((msg) => {
       if (msg === 'REG') {
          console.log( this.regForm.value);
          this.mentService.registerLib(this.regForm.value)
            .subscribe( (res: any) => {
               if (res.RESULT === 'SUCCESS') {
                 this.getAllLibList();
                 this.regForm.reset();
               }
            });
       }
    });
  }

  libUpdate(lib) {

       // 음원으로 음원정보 찿음
       const mentIndex = this.colorings.findIndex( (item) => item.ment_name === lib.ment_name);
       this.regForm.setValue({gym_lib_name: lib.gym_lib_name, extension: lib.extension,
          offday: lib.offday, ment: this.colorings[mentIndex] });
       this.modal.open(this.modiModal,  {size: 'lg'}).result.then((msg) => {
         if (msg === 'MOD') {
             this.mentService.updateLib(lib.id, this.regForm.value)
               .subscribe( (res: any) => {
                  if (res.RESULT === 'SUCCESS') {
                    this.getAllLibList();
                    this.regForm.reset();
                  }
               });
         }
    });
  }

  libDelete(lib: ILib) {
       this.mentService.deleteLib(lib.id)
         .subscribe( (res: any) => {
          if (res.RESULT === 'SUCCESS') {
            this.getAllLibList();
          }
         });
  }

  // 새로고침
  reset() {
    this.libList$ =  this.mentService.getLibList(this.page, this.pageSize);
  }

  // 페이지
  getNext() {
    this.libList$ = this.mentService.getLibList(this.page + 1, this.pageSize);
  }

}
