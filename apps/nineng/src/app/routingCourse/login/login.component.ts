import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthStore } from '../services/auth.store';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthStore) {

    this.form = fb.group({
      email: ['test@gmail.io', [Validators.required]],
      password: ['test', [Validators.required]],
    });

  }

  ngOnInit() {

  }

  login() {

    const val = this.form.value;

    this.auth.login(val.email, val.password)
      .subscribe(
        () => {
          this.router.navigateByUrl('/ngrouting/courses');
        },
        err => {
          alert('로그인 실패!!');
        },
      );



  }

}
