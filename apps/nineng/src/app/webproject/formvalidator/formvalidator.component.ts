import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-formvalidator',
  templateUrl: './formvalidator.component.html',
  styleUrls: ['./formvalidator.component.scss'],
})
export class FormvalidatorComponent implements OnInit {

  formGroup: FormGroup;
  getErrorUsername = '이름명이 넣어주세요';
  getErrorEmail = '이메일란이 비어 있습니다.';
  getErrorPassword = '암호란이 비어 있습니다.';
  getErrorPassword2 = '암호검증란이 비어 있습니다.';

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.fb.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required], this.checkInUseEmail],
      password: [null, Validators.required],
      password2: [null, Validators.required],
    });
  }

  setChangeValidate() {
    this.formGroup.get('username').valueChanges.subscribe((data) => {
      console.log('[change username] ', data);
    });
  }

  checkInUseEmail(control) {
    // mimic http database access
    const db = ['tony@gmail.com'];
    return new Observable((observer) => {
      setTimeout(() => {
        const result = (db.indexOf(control.value) !== -1) ? { alreadyInUse: true } : null;
        observer.next(result);
        observer.complete();
      }, 4000);
    });
  }

  onSubmit(post) {
    console.log(post);

  }

}
