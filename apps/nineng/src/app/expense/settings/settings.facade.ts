import { Injectable } from '@angular/core';
import { tap } from 'rxjs/internal/operators/tap';

import { ExpenseCategory } from '../models/expenseCategory';
import { ExpenseCategoryService } from '../share/api/expenseCategory.api';
import { SettingsState } from './settings.state';

@Injectable()
export class SettingsFacade {

    constructor(
        private expenseCategoryService: ExpenseCategoryService,
        private  settingsState: SettingsState,
    ) {}

    getExpenseCategories$() {
        return  this.expenseCategoryService.getAllExpenseCategory();
            
    }

 

 

}
