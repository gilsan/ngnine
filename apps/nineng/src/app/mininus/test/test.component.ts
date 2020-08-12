import { Component, OnInit, OnDestroy } from '@angular/core';
import { TestService } from './test.service';

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

  ngOnInit(): void {
    this.getAws();
    this.fetchAws();
    this.storeAws();

    // this.bob.call(this.bill, 2, 'Good!!!');
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
