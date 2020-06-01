import { BehaviorSubject, Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { ROOMINFO } from '../models/amenity';

@Injectable()
export class RoomsService {

     roomSubject$ = new BehaviorSubject<number>(1);
     roomCount$ = this.roomSubject$.asObservable();

     adultSubject$ = new BehaviorSubject<number>(1);
     adultCount$ = this.adultSubject$.asObservable();

     childSubject$ = new BehaviorSubject<number>(0);
     childCount$ = this.childSubject$.asObservable();
    constructor(
        
    ) {}

    getRoomInfo(roomnum: number) {
       
        return of(ROOMINFO[roomnum]);     
    }

    setRoomCount(room: number) {
        this.roomSubject$.next(room);
    }

    setAdult(adult: number) {
        this.adultSubject$.next(adult);
    }

    setChild(child: number) {
        this.childSubject$.next(child);
    }
     
}