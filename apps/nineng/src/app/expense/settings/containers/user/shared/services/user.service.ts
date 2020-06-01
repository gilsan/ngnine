import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interface/user.interface';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class UserService {
   constructor(
       public http: HttpClient,
   ) {}

   getUsers(): Observable<User[]> {
       return this.http.get<User[]>('assets/data.json')
   }

   getMakebot() {
      const result = this.http.get(`https://api.botmoa.net/pbx/api/model/?api=send_pbx_msg%20&User_Call_No=01032707556&Hospital_ARS_no=07081448972&Call_Request_Time=2020-05-03 10:10:10`);
      return result;
   }
}