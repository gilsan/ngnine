import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ModalService {

    subject$ = new Subject();
    close$ = this.subject$.asObservable();
    close() {
        this.subject$.next();
    }

}