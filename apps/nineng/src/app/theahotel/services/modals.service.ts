import {Observable, Subject} from "rxjs";

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  private  subject = new Subject();
  public close$: Observable<any> =  this.subject.asObservable();

  private availSubject = new Subject();
  public openAvailability$: Observable<any> =  this.availSubject.asObservable();
  constructor() { }

  close() {
      this.subject.next();
  }
  openAvailability() {
      this.availSubject.next();
  }
}
