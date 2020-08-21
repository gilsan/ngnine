import { Component, OnInit, OnDestroy } from '@angular/core';
import { TestService } from './test.service';
import { IUser } from './test.model';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnDestroy {

  message = '';
  constructor(
    private awsSeervice: TestService,
  ) { }

  userInfo: IUser = { age: 30, height: 200, income: 1000 };

  ngOnInit(): void {
    // this.getAws();
    // this.fetchAws();
    // this.storeAws();

    // this.bob.call(this.bill, 2, 'Good!!!');

    // this.postAws(this.userInfo);
    // this.postUser();
    //this.getProduct();

    this.updateProduct();
  }

  postUser() {
    this.awsSeervice.postUser().subscribe(data => {
      console.log('[TEST][32][aws][POST-USER]', data);
      //  this.message = data['message'];
    });
  }

  updateProduct() {
    this.awsSeervice.updateProduct().subscribe(data => {
      console.log('[TEST][32][aws][POST-USER]', data);
      //  this.message = data['message'];
    });
  }

  getProducts() {
    this.awsSeervice.getProducts()
      .pipe(
        map(data => data["body"]),
      )
      .subscribe(data => {
        console.log('[TEST][40][aws][GET-PRODUCTS]', JSON.parse(data).Items);
        //  this.message = data['message'];
      });
  }

  getProduct() {
    this.awsSeervice.getProduct()
      .pipe(
        map(data => data["body"]),
      )
      .subscribe(data => {
        console.log('[TEST][40][aws][GET-PRODUCT]', JSON.parse(data));
        //  this.message = data['message'];
      });
  }
  getAws() {
    this.awsSeervice.getAws().subscribe(data => {
      console.log('[TEST][21][aws][POST-SAVE]', data);
      //  this.message = data['message'];
    });
  }

  fetchAws() {
    this.awsSeervice.fetchAws().subscribe(data => {
      // console.log('[TEST][31][aws][FETCH]', data);
      //  this.message = data['message'];
    })
  }

  storeAws() {
    this.awsSeervice.storeAws().subscribe(data => {
      //  console.log('[TEST][31][aws][STORE]', data);
      //  this.message = data['message'];
    })
  }

  postAws(user: IUser) {
    this.awsSeervice.postAws(user).subscribe(data => {
      console.log('[TEST][47][aws][POST-DATA]: ', data);
      //  this.message = data['message'];
    })
  }

  deleteAws() {
    this.awsSeervice.deleteAws().subscribe(data => {
      console.log('[TEST][31][aws][DELETE]', data)
    })
  }

  ngOnDestroy() { }

  // the difference between call() apply() and bind()
  // without strict mode "this" will default to the Global/Window obj
  // 'use strict';

  private bob = function (num, str) {
    console.log('bob', num, str, this);
    return true;
  }

  private bill = {
    name: 'Bill Murray',
    movice: 'Lost in Tramslation',
    myMethod: function (fn) { }
  }



}
