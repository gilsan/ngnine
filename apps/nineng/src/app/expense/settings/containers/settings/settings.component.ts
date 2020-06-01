import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';
import { ExpenseCategory } from '../../../models/expenseCategory';
import { SettingsFacade } from '../../settings.facade';
import { ExpenseCategoryService } from '../../../share/api/expenseCategory.api';
 

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  expenseCategories$: Observable<ExpenseCategory[]>;
  constructor(
    private settingsFacade: SettingsFacade,
    private expenseCategoryService:  ExpenseCategoryService,
  ) { }

  ngOnInit(): void {  
       this.loadInit();
  }

  loadInit() {
    this.expenseCategories$ = this.settingsFacade.getExpenseCategories$()
    .pipe(
      map(expenses => expenses.filter(expense => expense.counterpartyPatterns.length > 0)),
    );
  }

  addExpenseCategory(evt) {
    this.expenseCategories$ =  this.expenseCategoryService.addExpenseCategory(evt).pipe(
        switchMap(() => this.settingsFacade.getExpenseCategories$())
      );
  }

  categoryUpdated(event) {
    this.expenseCategories$ =  this.expenseCategoryService.updateExpenseCategory(event).pipe(
          switchMap(() => this.settingsFacade.getExpenseCategories$())
        );
  }



}
