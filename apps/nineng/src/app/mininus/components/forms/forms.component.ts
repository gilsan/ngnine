import { Component, OnInit } from '@angular/core';
import { ExpenseCategory } from '../formarray/expense-model';
import { expenseCategories } from '../formarray/expense-mock';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

categories: ExpenseCategory[] = expenseCategories;

  constructor() { }

  ngOnInit(): void {
  }

  categoryAdded(evt) {
       console.log(evt);
  }

}
