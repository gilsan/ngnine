// tslint:disable-next-line:ordered-imports
import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
// tslint:disable-next-line:ordered-imports
import { FormGroup, FormBuilder } from '@angular/forms';
import { FirebaseAuthService } from '../firebase-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup;

  constructor(
    private afAuth: AngularFireAuth,
    private authService: FirebaseAuthService,
    private ngZone: NgZone,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['test@test.com'],
      passwd: ['123456'],
    });

    // this.initLogin();
  }

  initLogin() {
    const userInfo = this.authService.getItem('userID');
    if (userInfo) {
      this.ngZone.run(() => {
        this.router.navigateByUrl('/home');
      });
    } else {
      this.ngZone.run(() => {
        this.router.navigateByUrl('/register');
      });
    }
  }

  login() {
    this.authService.login(this.form.value['email'], this.form.value['passwd']);
  }

  ngOnDestroy() {
  }

}
