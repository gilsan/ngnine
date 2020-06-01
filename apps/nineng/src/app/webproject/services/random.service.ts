import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RandomService {

  subject$ = new BehaviorSubject<any>('');
  subjectObservable$ = this.subject$.asObservable();

  url = 'https://randomuser.me/api';

  constructor(
    private http: HttpClient,
  ) {
    this.getRandomUser();
  }

  getRandomUser() {
    return this.http.get(`${this.url}`)
      .pipe(
        tap((data) => {
          this.subject$.next(data);
        }),
      );
  }

  getRandomSubscribe() {
    return this.subjectObservable$;
  }







}
