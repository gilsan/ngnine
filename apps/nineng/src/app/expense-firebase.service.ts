import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ExpenseCategory } from './expense/models/expenseCategory';
import { expenseCategories } from './expenseCategory.mock';
import { convertSnaps } from './shared/utils';

@Injectable({
    providedIn: 'root'
})
export class ExpenseFirebaseService {

    expenseCategorSubject$ = new BehaviorSubject<ExpenseCategory[]>([]);
    expenseCategoryObservable$ = this.expenseCategorSubject$.asObservable();

    expenseCategories: ExpenseCategory[] = expenseCategories;

    constructor(
        private db: AngularFirestore,
    ) {
        //  this.loadAllExpenses();
    }

    makeExpense() {
        console.log('[][expense-firebase]', this.expenseCategories);
        Object.values(this.expenseCategories).forEach((course) => {
            this.db.collection('expensecategories').add(course);
        });
    }

    loadAllExpenses() {
        this.db.collection('expensecategories').snapshotChanges()
            .pipe(
                map((snaps) => convertSnaps<ExpenseCategory>(snaps)),
                tap((expense) => {
                    console.log('[expense firebase service][loadAllExpenseCategory]', expense);
                    this.expenseCategorSubject$.next(expense);
                }),
            ).subscribe();
    }

    getAllExpenses() {
        return this.expenseCategoryObservable$;
    }

}
