import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Receive, Send, Record } from './models/receive.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordingService {
  url='http://221.141.251.58/fileuploadTest';

  constructor(private http: HttpClient) { }

   // 녹취 리스트
  receiveList(page: number, pageSize: number): Observable<Receive[]> {
     return   this.http.get<Receive[]>(`${this.url}/receiveList.php?page=${page}&pageSize=${pageSize}`)
  }

  // 녹취 등록
  receiveRegister(receive: Receive) {
     return this.http.post(`${this.url}/receiveRegister.php`, {receive});
  }

  // 녹취 갱신
  receiveUpdate(id:string,receive: Receive) {
    return this.http.post(`${this.url}/receiveUpdate.php`, {id,receive})
  }

  // 녹취 삭제
  receiveDelete(id: string) {
    return this.http.post(`${this.url}/receiveDelete.php`, {id})
  }
  // 검색
  receiveSearch(phone): Observable<Receive[]> {
    return this.http.post<Receive[]>(`${this.url}/receiveSearch.php`, {phone})
  }



// 발신 리스트
 sendList(page: number, pageSize: number): Observable<Send[]> {
  return   this.http.get<Send[]>(`${this.url}/sendList.php?page=${page}&pageSize=${pageSize}`)
 }

 // 발신 등록
 sendRegister(send: Send) {
  return this.http.post(`${this.url}/sendRegister.php`, {send});
 }

 // 발신 갱신
 sendUpdate(id: string, send:Send) {
  return this.http.post(`${this.url}/sendUpdate.php`, {id,send})
 }
 // 발신 삭제
 sendDelete(id:string){
  return this.http.post(`${this.url}/sendDelete.php`, {id})
 }
 // 발신 검색
 sendSearch(phone): Observable<Send[]> {
  return this.http.post<Send[]>(`${this.url}/sendSearch.php`, {phone})
 }

// 녹취음원  리스트
mgnList(page: number, pageSize: number): Observable<Record[]> {
  return this.http.get<Record[]>(`${this.url}/mgnList.php?page=${page}&pageSize=${pageSize}`);
}

// 녹취음원 삭제
mgnDelete(){}

}
