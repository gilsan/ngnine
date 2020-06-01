import { BehaviorSubject, Observable,  of } from 'rxjs';
import { concatMap, delay, finalize, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {

    private loadingSubject = new BehaviorSubject<boolean>(false);
    public loading$: Observable<boolean> = this.loadingSubject.asObservable();

    showLoadingUntilComplete<T>(obs$: Observable<T>): Observable<T> {
        return of(null)
                .pipe(
                    tap(() => this.loadingSubject.next(true)),
                    concatMap(() => obs$),
                    delay(1500),
                    finalize(() => {
                        this.loadingSubject.next(false);
                    }),
                );
    }

    loadingOn() {
        this.loadingSubject.next(true);
    }

    loadingOff() {
       this.loadingSubject.next(false);
    }

}
