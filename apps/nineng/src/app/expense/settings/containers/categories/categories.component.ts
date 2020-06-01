import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpenseCategory } from '../../../models/expenseCategory';
import { ExpenseCategoryService } from '../../../share/api/expenseCategory.api';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  newCategory: ExpenseCategory = {idx:'',id:'',name:'',counterpartyPatterns:[]};
  @Input() expenseCategories$: Observable<ExpenseCategory[]>;
  @Output() categoryAdded: EventEmitter<ExpenseCategory> = new EventEmitter();
  @Output() categoryUpdated: EventEmitter<ExpenseCategory> = new EventEmitter();

  constructor(
    private expenseCategoryService: ExpenseCategoryService,
  ) {}

  ngOnInit(): void {}

  addExpenseCategory(evt) {
    console.log(evt)
    this.categoryAdded.emit(evt);
  }

  categoryUpdate(event) {
     this.categoryUpdated.emit(event);
  }
  


}
