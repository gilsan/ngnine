import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Observable } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { Item } from '../models/nav-item';

@Injectable()
export class FbService {

    itemCollection: AngularFirestoreCollection<Item>;
    constructor(
        public auth: AngularFireAuth,
        public firebase: AngularFirestore
    ) {
        this.itemCollection = firebase.collection<Item>('cities');
        // this.itemsCollection = afs.collection<Item>('items');
    }

    isAuth() {

    }

    signin(email: string, passwd: string) {
        return this.auth.signInWithEmailAndPassword(email, passwd);
    }

    signout(email: string, passwd: string) {
        return this.auth.signOut();
    }

    getCities(): Observable<Item[]> {
        return this.itemCollection.snapshotChanges()
            .pipe(
                map((actions) => actions.map((a) => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return <Item>{ id, ...data };
                }),
                    first(),
                )
            );
    }

    addCity(name: string) {
        const userId = localStorage.getItem('userID')
        const item: Item = { userId, name };
        return this.itemCollection.add(item);
        //   .then(data => console.log('[][fb.service][addCity]', data))
        //  return this.itemCollection.doc(id).set(item)
    }


}
