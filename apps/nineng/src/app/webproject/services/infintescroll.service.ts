import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class InfiniteScrollService {

  url = `https://jsonplaceholder.typicode.com/posts?`;

  constructor(
    private http: HttpClient,
  ) { }

  getList(limit: number, page: number) {
    return this.http.get('assets/infinitescroll.json');
  }


}
