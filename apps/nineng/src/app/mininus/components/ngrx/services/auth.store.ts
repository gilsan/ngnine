import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { IUser } from '../model/user';

const AUTH_DATA = 'auth_data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {


  private subject = new BehaviorSubject<IUser>(null);
  user$: Observable<IUser> = this.subject.asObservable();

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor() {
    this.isLoggedIn$ = this.user$.pipe(map((user: any) => !!user));
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map((loggedIn) => !loggedIn));
    const user_data = localStorage.getItem('AUTH_DATA');
    if (user_data) {
      this.subject.next(JSON.parse(user_data));
    }
  }

  Login(email: string, password: string): Observable<IUser> {
    const data = {
      id: 'gilsan', email: 'test@test.io',
      pictureUrl:
        // tslint:disable-next-line: max-line-length
        'https://lh3.googleusercontent.com/-1pUNnTB3vaA/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdn4uEc0ti8YE4Uuw6_Kz04tVe2Mg.CMID/s32-c/photo.jpg'
    };
    return of(data)
      .pipe(
        tap((user) => {
          this.subject.next(user);
          localStorage.setItem('AUTH_DATA', JSON.stringify(user));
        }),
        shareReplay(),
      );
  }

  Logout() {
    this.subject.next(null);
    localStorage.removeItem('AUTH_DATA');
  }

}
