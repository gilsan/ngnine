import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { first, map, shareReplay, tap } from 'rxjs/operators';
import { convertSnaps } from '../../../shared/utils';
import { IDateTime, IListColoring, IWeekday } from '../models';

@Injectable({
   providedIn: 'root',
})
export class FirebaseColoringService {

   listsSubject$ = new BehaviorSubject<IListColoring[]>([]);
   listsObservable$: Observable<IListColoring[]> = this.listsSubject$.asObservable();

   dateTimeSubject$ = new BehaviorSubject<IDateTime[]>([]);
   dateTimeObservable$: Observable<IDateTime[]> = this.dateTimeSubject$.asObservable();

   weekdaySubject$ = new BehaviorSubject<IWeekday[]>([]);
   weekdayObservable$: Observable<IWeekday[]> = this.weekdaySubject$.asObservable();

   constructor(
      private db: AngularFirestore,
   ) {
      this.getRegColoringList();
      this.getListAllColoring();
      this.getAllWeekdayList();
   }

   getColoringList(page: number, pageSize: number): Observable<IListColoring[]> {
      return this.db.collection('coloringlist',
         (ref) => ref.orderBy('id', 'asc').limit(pageSize).startAfter(page * pageSize),
      ).snapshotChanges()
         .pipe(
            map((snaps) => convertSnaps<IListColoring>(snaps)),
            shareReplay(),
            first(),
         );
   }
   private getListAllColoring() {
      this.db.collection('coloringlist').snapshotChanges()
         .pipe(
            map((snaps) => convertSnaps<IListColoring>(snaps)),
            tap((data) => this.listsSubject$.next(data)),
         ).subscribe();
   }

   getAllColoringList() {
      return this.listsObservable$;
   }

   deleteColoring(idx: string) {
      console.log('[][firebase][deleteColoring] ', idx);
      return of(this.db.doc(`coloringlist/${idx}`).delete())
         .pipe(
            tap(() => {
               this.getAllColoringList();
            }),
         );
   }

   private getRegColoringList() {
      this.db.collection('dateTime').snapshotChanges()
         .pipe(
            map((snaps) => convertSnaps<IDateTime>(snaps)),
            tap((data) => this.dateTimeSubject$.next(data)),
         ).subscribe();
   }

   getAllRegColoringList() {
      return this.dateTimeObservable$;
   }

   private getAllWeekdayList() {
      this.db.collection('weekday').snapshotChanges()
         .pipe(
            map((snaps) => convertSnaps<IWeekday>(snaps)),
            tap((data) => this.weekdaySubject$.next(data)),
            shareReplay(),
         ).subscribe();
   }

   getWeekdayList() {
      return this.weekdayObservable$;
   }

   addWeekday(weekday: IWeekday) {
      return of(this.db.collection('weekday').add(weekday));
   }

   changeWeekday(weekday: IWeekday) {
      const { idx, ...restweekday } = weekday;
      return of(this.db.collection('weekday').doc(`${idx}`).update(restweekday))
         .pipe(
            tap(() => this.getAllWeekdayList()),
         );
   }

}
