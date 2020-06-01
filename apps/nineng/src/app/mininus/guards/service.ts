import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import  { first} from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class Service {
    capitals$ = new BehaviorSubject<any>([])
    capitals = [];

    constructor(
        private http: HttpClient
      ) { }

    getCapitalList() {
        this.http.get(`https://restcountries.eu/rest/v2/all`)
        .pipe(
          first(),
        ).subscribe( (data: Array<any>) => {
            data.forEach(country => {
              this.capitals.push(country['capital'])
            });
           this.capitals$.next(this.capitals);
        });  
    }
}