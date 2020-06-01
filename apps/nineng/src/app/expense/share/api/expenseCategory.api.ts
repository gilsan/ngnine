import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; 
import { BehaviorSubject, from, Observable, of, throwError } from 'rxjs';
import { catchError, first, map, shareReplay, tap } from 'rxjs/operators';
import { convertSnaps } from '../../../shared/utils';
import { expenseCategories } from '../../mocks/expenseCategory.mock';
import { ExpenseCategory } from '../../models/expenseCategory';
 
@Injectable()
export class ExpenseCategoryService {

   // private  url = 'https://221.141.251.58/opensys';

    expenseCategories: ExpenseCategory[] = expenseCategories;

    expenseCategorySubject$ = new BehaviorSubject<ExpenseCategory[]>([]);
    expenseCategoryObsevable$  = this.expenseCategorySubject$.asObservable();
     constructor(
         private http: HttpClient,
         private db: AngularFirestore,
     ) {
         this.loadAllExpenseCategory();
     }
 

    loadAllExpenseCategory()  {
         this.db.collection('expensecategories').snapshotChanges()
        .pipe(
            map( (snaps) => convertSnaps<ExpenseCategory>(snaps)),
            shareReplay(),
            tap( (expense) => {
                this.expenseCategorySubject$.next(expense);
             }),

            first(),
        ).subscribe();
    }

    getAllExpenseCategory() {
         return this.expenseCategoryObsevable$;
    }

    addExpenseCategory(name: ExpenseCategory) {
        const { idx, ...expense } = name;
        const id = this.expenseCategorySubject$.getValue().length + 1;
        expense.id = id;
        expense.counterpartyPatterns = [];
        return from(this.db.collection('expensecategories').add(expense))
          .pipe(
              tap(() => this.loadAllExpenseCategory())
          );

          }

        updateExpenseCategory(value: ExpenseCategory ) {
        const { idx, ...expense } = value;
        return from(this.db.doc(`expensecategories/${idx}`).update(expense))
           .pipe(
            tap(() => this.loadAllExpenseCategory()),
        );

        // const expenses = this.expenseCategorySubject$.getValue();
        // const index = expenses.findIndex( (expense) => expense.idx === idx);
        // const newExpenses  = { ...expenses, ...value};
        // const newExpense = expenses.slice(0);
        // newExpenses[index] = newExpense;
        // this.expenseCategorySubject$.next(newExpenses);           
    }

}
