import { Component, OnInit } from '@angular/core';
import { NgAlertService } from '../ng-alaert.service';
import { AlertMessag } from '../alter-message';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { merge } from 'rxjs/internal/observable/merge';

@Component({
  selector: 'app-ng-alert',
  templateUrl: './ng-alert.component.html',
  styleUrls: ['./ng-alert.component.scss']
})
export class NgAlertComponent implements OnInit {

  constructor(
    private service: NgAlertService
  ) { }

  alertMessage$:Observable<AlertMessag| boolean>;  
  close$ = new Subject<boolean>();
  
  ngOnInit(): void {
    this.alertMessage$ = merge(this.service.alertMessage$, this.close$);
  }

  closeAlert() {
    this.close$.next();
  }

}
