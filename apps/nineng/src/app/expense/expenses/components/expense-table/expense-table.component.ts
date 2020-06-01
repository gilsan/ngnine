import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Expense } from '../../../models/expense';
import { ExpenseCategory } from '../../../models/expenseCategory';
import { ExpenseDialogComponent, SubmitExpenseCallback } from '../expense-dialog/expense-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ExpenseApi } from '../../api/expense.api';
 
@Component({
  selector: 'app-expense-table',
  templateUrl: './expense-table.component.html',
  styleUrls: ['./expense-table.component.scss']
})
export class ExpenseTableComponent implements OnInit {

  @Input() dataSource: DataSource<Expense[]>;
  @Input() displayedColumns: string[];
  @Input() categories: ExpenseCategory[];
  @Input() deleteCallback: ExpenseDialogComponent;   
  @Input() submitCallback: SubmitExpenseCallback;
  @Output() updateOrcreateExpense: EventEmitter<ExpenseCategory> = new EventEmitter();
  @Output() deleteExpense: EventEmitter<string> = new EventEmitter();

  constructor(
    public dialog: MatDialog,
    public expenseApi: ExpenseApi,
  ) { }

  displayedColumnss: string[] = ['position', 'name', 'weight', 'symbol'];
  
  ngOnInit(): void {
     console.log('[][table] ',this.dataSource);
  }

  confirmDelete(idx) {
    console.log(idx);
    this.deleteExpense.emit(idx);    
  }

  edit(expense) {   
    const ref=this.dialog.open(ExpenseDialogComponent, {
      data: { 
        categories: this.categories,
        expense: expense,
        callback$: this.submitCallback 
      },
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%'
    });
    
    ref.afterClosed().subscribe( result => {
        this.updateOrcreateExpense.emit(result);              
    });   
  }

}
