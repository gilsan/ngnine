import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.store';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.form = this.fb.group({
      email: ['test@test.io', [Validators.required]],
      password: ['123456', [Validators.required]],

    });
  }

  login() {
    const val = this.form.value;
    this.auth.Login(val.email, val.password)
      .subscribe((data) => {
        this.router.navigateByUrl('/mininus/components/ngrx');
      });
  }


}
