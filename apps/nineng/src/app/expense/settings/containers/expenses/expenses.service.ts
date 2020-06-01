import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { ExpenseList } from './models/expense-list.model';
import { map, tap, shareReplay, first } from 'rxjs/operators';
import { convertSnaps } from 'apps/nineng/src/app/shared/utils';
import { HttpClient } from '@angular/common/http';
import { User } from './models/users.model';

@Injectable()
export class ExpensesService  {
    
    listSubject$ = new BehaviorSubject<ExpenseList[]>([])
    listObservable$ = this.listSubject$.asObservable();

    constructor(
        private db: AngularFirestore,
        private http: HttpClient,
    ) {
        this.loadList();
    }

    loadList() {
        this.db.collection('expenselist').snapshotChanges()
          .pipe(
              map(snaps => convertSnaps<ExpenseList>(snaps)),
              tap( lists => {
                //  console.log(lists);
                  this.listSubject$.next(lists);
              }),
              shareReplay(),
              first()
          ).subscribe();
    }

    getLists() {
        return this.listObservable$;
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>('assets/users.json')
    }

    createList() {

    }

    updateList() {}

    deleteList() {}

    pageList(start:number, size:number) {}

   


   

}