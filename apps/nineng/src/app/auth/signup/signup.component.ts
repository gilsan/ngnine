import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FirebaseAuthService } from '../firebase-auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: FirebaseAuthService
  ) { }

  ngOnInit() {
    console.log('signup component !!!!!');
    this.form = this.fb.group({
      email: ['test@test.com'],
      passwd: ['123456']
    });
  }

  signup() {
    this.authService.registerUser(this.form.value.email, this.form.value.passwd);
 
    // this.authService.authState$.subscribe(data => {
    //      //  console.log('[][][signup]', data, this.form.value);
    //       if (data) {
    //        this.authService.setItem('userInfo', this.form.value)
    //       }           
    //  });
    
  }

}
