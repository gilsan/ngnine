import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { Subject } from 'rxjs';

@Injectable()
export class FirebaseAuthService {

    authchange$ = new Subject<boolean>();
    authState$ = this.authchange$.asObservable();
    private isAuthenticated = false;
    constructor(
        private router: Router,
        private afAuth: AngularFireAuth,
        private ngZone: NgZone,
    ) { }

    registerUser(email: string, passwd: string) {
        console.log('[20][][registerUser]', email, passwd);
        this.afAuth.createUserWithEmailAndPassword(email, passwd)
            .then((result) => {
                console.log('[][service]registerUser]', result);
                console.log('[][service]registerUser]', result.user);
                console.log('[][service]registerUser]', result.user.uid);
                localStorage.setItem('userID', result.user.uid);
                this.authSuccessfully();
            })
            .catch((data) => {
                const msg = data.code.split('/')[1].trim();
                console.log('[][reject]registerUser]', msg);
                if (msg === 'email-already-in-use') {
                    this.router.navigate(['/home']);
                }
            });
    }

    authSuccessfully() {
        this.isAuthenticated = true;
        this.authchange$.next(true);
        this.ngZone.run(() => this.router.navigate(['/home']));
    }

    login(email: string, passwd: string) {
        this.afAuth.signInWithEmailAndPassword(email, passwd)
            .then((result) => {
                console.log('[][authService][login]]', result.user.uid);
                localStorage.setItem('userID', result.user.uid);
                this.authSuccessfully();
            });
    }

    // logout() {
    //     this.isAuthenticated = false;
    //     this.authchange$.next(false);
    //     this.router.navigate(['/login']);
    // }

    // isAuth() {
    //     return this.isAuthenticated;
    // }

    getItem<T>(key: string) {
        if (localStorage[key]) {
            return <T>localStorage[key];
        }
        return null;
    }

    setItem<T>(key: string, item: any) {
        localStorage[key] = JSON.stringify(item);
    }

}
