import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AwsService {

  constructor(
    private http: HttpClient
  ) { }

  testAwsGet() {
    const url = 'https://mxpkd321oi.execute-api.ap-northeast-2.amazonaws.com/de/store-data';
    return this.http.post(`${url}`, {});
  }
}