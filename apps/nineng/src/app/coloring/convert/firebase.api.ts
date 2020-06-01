import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface IColoring {
    id: number;
    fileName: string;
    regDate: string;
    title: string;
}

@Injectable({
    providedIn: 'root',
})
export class FirebaseApiService {
    baseUrl = 'http://221.141.251.58/fileuploadTest';
    constructor(
        private db: AngularFirestore,
        private http: HttpClient,
    ) {}

    addColoring(lists: IColoring[]) {
        lists.forEach( (list) =>  {
            this.db.collection('coloringlist').add(list).then((data) => {
                console.log(data);
            });
        });
    }

    addDateTime(lists: any[]) {
        lists.forEach( (list) =>  {
            this.db.collection('dateTime').add(list).then((data) => {
                console.log(data);
            });
        });
    }

    getColoringList(): Observable<IColoring[]> {
        return this.http.get<IColoring[]>('/api/coloringList.php');
      }

   getHttpsTest() {
       return this.http.get(`${this.baseUrl}/getment.php`);
   }

   getDateTime() {
       return this.http.get(`${this.baseUrl}/coloringMentList.php`);
   }
}
