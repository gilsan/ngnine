import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth} from '@angular/fire/auth';
import 'firebase/firestore';
import { Item } from '../models/nav-item';

@Injectable()
export class FirebaseService {

    itemCollection: AngularFirestoreCollection<Item>;
    constructor(
        public afs: AngularFirestore,
        public auth: AngularFireAuth,
    ) {
        this.itemCollection = afs.collection<Item>('cities');
    }

    getCities() {
        console.log('[37][Firebase service][getCities]');
    }
}