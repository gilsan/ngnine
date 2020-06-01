import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IColoringList } from '../models';
import { IColoring } from '../models/audio.model';

@Injectable({
    providedIn: 'root',
  })
export class ColoringService {
   baseUrl = 'http://221.141.251.58/fileuploadTest';
    constructor( private http: HttpClient) {}
    getColoringList(): Observable<IColoring[]> {
      return this.http.get<IColoring[]>(`${this.baseUrl}/coloringList.php`);
    }

    getMonthMentList() {
      return this.http.get(`${this.baseUrl}/getment.php`);
    }

    coloringInsert(start, end, title, fileName) {
      return this.http.post(`${this.baseUrl}/coloringInsert.php`, {start, end, title, fileName});
    }

    coloringUpdate(id, start, end, title, fileName) {
      return this.http.post(`${this.baseUrl}/coloringUpdate.php`, {id, start, end, title, fileName});
    }

    coloringDelete(id ) {
      return this.http.post(`${this.baseUrl}/coloringDelete.php`, {id});
    }

    getAllColoringList(page: number, pageSize: number): Observable<IColoringList[]> {
      return this.http.get<IColoringList[]>(`${this.baseUrl}/getAllColoringList.php?page=${page}&pageSize=${pageSize}`);
    }

    memtSearch(title): Observable<IColoringList> {
      return this.http.post<IColoringList>(`${this.baseUrl}/mentColoringSearch.php`, {title});
    }

    getSystemStatus() {
      return this.http.get<IColoring[]>(`${this.baseUrl}/server.php`);
    }

}
