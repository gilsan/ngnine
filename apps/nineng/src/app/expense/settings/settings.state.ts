import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ExpenseCategory } from '../models/expenseCategory';


@Injectable()
export class SettingsState {

    expenseSubject$ = new BehaviorSubject<ExpenseCategory[]>(null);
    public expenseCategories$ = this.expenseSubject$.asObservable();

    getExpenseCategories() {
        return  this.expenseSubject$.asObservable();
    }
    setExpenseCategories(categories: ExpenseCategory[]) {
       this.expenseSubject$.next(categories);
    }
}
