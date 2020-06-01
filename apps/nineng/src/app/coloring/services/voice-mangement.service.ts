// tslint:disable-next-line:ordered-imports
import { HttpClient, HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IColoring, IDepart, ILib, IWeekday } from '../admin/models';

@Injectable({
  providedIn: 'root',
})
export class VoiceManagementService {

  url = 'http://221.141.251.58/fileuploadTest';
  constructor( private http: HttpClient) {}
  getColoringList(page: number, pageSize: number): Observable<IColoring[]> {
    return this.http.get<IColoring[]>(`${this.url}/coloringTable.php?page=${page}&pageSize=${pageSize}`);
  }

  // 전체 음원 리스트
  getAllListColoring() {
     return this.http.get(`${this.url}/getAllListColoring.php`);
  }
  // 전체 내선번호
  departPhoneList() {
       return this.http.get(`${this.url}/departPhoneList.php`);
  }

  putColoringData(formData) {
  //  console.log('[19][voice Service] :', formData);
    return this.http.post(`${this.url}/coloringUpload.php`, formData, {
           reportProgress: true,
           observe: 'events',
           responseType: 'json',
        });
  }

  getWeekdayList(page: number, pageSize: number): Observable<IWeekday[]> {
    return this.http.get<IWeekday[]>(`${this.url}/weekdayTable.php?page=${page}&pageSize=${pageSize}`);
  }

  getDepartList(page: number, pageSize: number): Observable<IDepart[]> {
    return this.http.get<IDepart[]>(`${this.url}/getDepartList.php?page=${page}&pageSize=${pageSize}`);
  }

  putWeekdayData(formData) {
   // console.log('[32][service][weekdayUpdate]: ',formData);
     return this.http.post(`${this.url}/weekdayUpload.php`, formData, {
        reportProgress: true,
        observe: 'events',
     });
  }

  mentUpdate(formData) {
    return this.http.post(`${this.url}/mentUpdate.php`, formData);
  }
  mentDelete(id: string) {
    return this.http.post(`${this.url}/mentDelete.php`, {id});
  }

  memtSearch( title: string): Observable<IColoring[]> {
    return this.http.post<IColoring[]>(`${this.url}/mentSearch.php`, {title});
  }

  weekdayUpdate(formData) {
  //  console.log('[50][service][weekdayUpdate]: ',formData);
    return this.http.post(`${this.url}/weekdayUpdate.php`, formData);
  }

  weekdayDelete(id: string) {
    return this.http.post(`${this.url}/weekdayDelete.php`, {id});
  }

  // 부서별 등록
   registerDepartment(data) {
      return this.http.post(`${this.url}/registerDepart.php`, {data});
  }

  // 부서별 수정
  updateDepartment(id: string, data: FormData) {
     return this.http.post(`${this.url}/updateDepart.php`, {id, data});
  }
  // 부서별 삭제
 deleteDeprtment(id) {
  return this.http.post(`${this.url}/deleteDepart.php`, {id});
 }

 // 도서관 휴관일 리스트
 getLibList(page: number, pageSize: number): Observable<ILib[]> {
  return this.http.get<ILib[]>(`${this.url}/getAllListLib.php?page=${page}&pageSize=${pageSize}`);
}

 // 도서관 휴관일 등록
 registerLib(data) {
  return this.http.post(`${this.url}/registerLib.php`, {data});
}

 // 도서관 휴관일 수정
 updateLib(id: string, data: FormData) {
  return this.http.post(`${this.url}/updateLib.php`, {id, data});
}

 // 도서관 휴관일 삭제
 deleteLib(id: number) {
  return this.http.post(`${this.url}/deleteLib.php`, {id});
 }

  private fileUploadProgress(event) {
     const percentDone = Math.round(100 * event.loaded / event.total);
     return { status: 'progress', message: percentDone};
  }

  private apiResponse(event) {
    return event.body;
  }
}
