import { Component, OnInit } from '@angular/core';
import { ExpenseFirebaseService } from '../expense-firebase.service';
import { ExpenseCategory } from './models/expenseCategory';
 
 

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  expenseCategories:ExpenseCategory[] = [];
  constructor(
    
  ) { }

  ngOnInit(): void {
 
  }

}
