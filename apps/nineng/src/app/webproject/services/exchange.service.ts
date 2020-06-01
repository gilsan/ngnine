import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Irates } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {

  url = 'https://api.exchangerate-api.com/v4/latest';

  subject$ = new BehaviorSubject<string>('');
  subjectObservable$ = this.subject$.asObservable();

  constructor(
    private http: HttpClient,
  ) { }

  getExchangeRate(country: string): Observable<Irates> {
    return this.http.get<Irates>(`${this.url}/${country}`);
  }

}
