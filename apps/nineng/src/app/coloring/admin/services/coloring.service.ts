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
  constructor(private http: HttpClient) { }
  getColoringList(): Observable<IColoring[]> {
    return this.http.get<IColoring[]>(`https://cors-anywhere.herokuapp.com/${this.baseUrl}/coloringList.php`);
  }

  getMonthMentList() {
    return this.http.get(`https://cors-anywhere.herokuapp.com/${this.baseUrl}/getment.php`);
  }

  coloringInsert(start, end, title, fileName) {
    // tslint:disable-next-line:max-line-length
    return this.http.post(`https://cors-anywhere.herokuapp.com/${this.baseUrl}/coloringInsert.php`, { start, end, title, fileName });
  }

  coloringUpdate(id, start, end, title, fileName) {
    // tslint:disable-next-line:max-line-length
    return this.http.post(`https://cors-anywhere.herokuapp.com/${this.baseUrl}/coloringUpdate.php`, { id, start, end, title, fileName });
  }

  coloringDelete(id) {
    return this.http.post(`https://cors-anywhere.herokuapp.com/${this.baseUrl}/coloringDelete.php`, { id });
  }

  getAllColoringList(page: number, pageSize: number): Observable<IColoringList[]> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<IColoringList[]>(`https://cors-anywhere.herokuapp.com/${this.baseUrl}/getAllColoringList.php?page=${page}&pageSize=${pageSize}`);
  }

  memtSearch(title): Observable<IColoringList> {
    // tslint:disable-next-line:max-line-length
    return this.http.post<IColoringList>(`https://cors-anywhere.herokuapp.com/${this.baseUrl}/mentColoringSearch.php`, { title });
  }

  getSystemStatus() {
    return this.http.get<IColoring[]>(`https://cors-anywhere.herokuapp.com/${this.baseUrl}/server.php`);
  }

}
