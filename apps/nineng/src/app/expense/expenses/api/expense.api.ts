import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; 
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { first, map, shareReplay, tap } from 'rxjs/operators';
import { budgetDefinition } from '../../mocks/budgetDefinition.mock';
 
import { BudgetDefinition } from '../../models/budgetDefinition';
import { Expense } from '../../models/expense';
import { Period } from '../../models/period';
import { convertSnaps } from './../../../shared/utils';
 


@Injectable({
    providedIn: 'root'
})
export class ExpenseApi {

    budgetSubject$ = new BehaviorSubject<BudgetDefinition[]>([]);
    budgetObservable$ = this.budgetSubject$.asObservable();

    expenseSubject$ = new BehaviorSubject<Expense[]>([]);
    expenseObservable$ = this.expenseSubject$.asObservable();
    
   constructor(
    private db: AngularFirestore,
   ) {
       this.loadBudgetDefinition();
       this.loadExpenses();
   }

   loadExpenses() {
        this.db.collection('expenses').snapshotChanges()
        .pipe(
             map( (snaps) => convertSnaps<Expense>(snaps)),           
             tap( (expense) => {
              // console.log('[loadExpenses]',expense);
                 this.expenseSubject$.next(expense);
             }),
             shareReplay(),
             first(),
        ).subscribe();
   }

   loadExpense() {
       return this.expenseObservable$;
   }

   filterExpenses(period: Period, search: string) {
    return this.db.collection('expenses', (ref)=> 
             ref.where('period.month', '==' ,period.month)
                .where('period.year', '==' ,period.year)
                .where('counterparty','==',search) ).snapshotChanges()
                .pipe(
                    map( (snaps) => convertSnaps<Expense>(snaps)),
                    first()
                );
   }

   createExpense(expense) {
   // console.log('[Create][expense api] After close dialog: ',expense);
    if (expense) {
      return from(this.db.collection('expenses').add(expense))
             .pipe(
                tap(() => this.loadExpenses())
             );
    }
    return of();
   }

   updateExpense(expense: Expense) {
    const { idx, ...expens } = expense;
   // console.log('[expenseApi][update]',idx,expens)
    return from(this.db.doc(`expenses/${idx}`).update(expens))
               .pipe(
                  tap(() => this.loadExpenses())
                 );
   }

   updateOrcreateExpense(expense: Expense) {
      //  console.log('[][expense api][updateOrcreateExpense] ',expense);
        const { idx, ...expens } = expense;
        return of(idx).pipe(
           map((data) => {
               if(idx) {
                 return this.createExpense(expense)
               } else {
                 return this.updateExpense(expens)
               }
           }),
           map((data) => from(data))
        );

   }

   deleteExpense(idx: string) {
    return  from(this.db.doc(`expenses/${idx}`).delete())
    .pipe(
      tap(() => this.loadExpenses())
     );
   }

   loadBudgetDefinition() {
      this.db.collection('budgetDefinitions').snapshotChanges()
      .pipe(
          map( (snaps)=> convertSnaps<BudgetDefinition>(snaps)),
          shareReplay(),
          tap( (budget)=> {
              this.budgetSubject$.next(budget);
          }),
          first()
      ).subscribe();
   }

   filterBudgetDefinition(period: Period, category: string) {
    return this.db.collection('budgetDefinitions', (ref)=>
             ref.where('period.month', '==' ,period.month)
                .where('period.year', '==' ,period.year)
                .where('category.name','==',category) ).snapshotChanges()
                .pipe(
                    map( (snaps) => convertSnaps<BudgetDefinition>(snaps)),
                    first()
                );
   }

   createBudgetDefinition(budgetDefinition: BudgetDefinition) {
     return this.db.collection('budgetDefinitions').add(budgetDefinition);
   }

   updateBudgetDefinition(budgetDefinition: BudgetDefinition) {
      const { idx, ...expense } = budgetDefinition;
      return from(this.db.doc(`budgetDefinitions/${idx}`).update(expense))
         .pipe(
          tap(() => this.loadBudgetDefinition())
      );
   }

   deleteBudgetDefinition(idx: string) {
      return  from(this.db.doc(`budgetDefinitions/${idx}`).delete())
               .pipe(
                 tap(() => this.loadBudgetDefinition())
                );
   }

}
