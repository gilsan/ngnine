import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';

@Injectable()
export class MessageService {

    subject$ = new BehaviorSubject<string[]>([]);
    errors$: Observable<string[]> = this.subject$.asObservable().pipe(
         filter((message)=>  message && message.length > 0)
    );
    showErrors(...errors:string[]) {
       this.subject$.next(errors);
    }
}