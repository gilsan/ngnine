import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription, Observable, from } from 'rxjs';
import { ExpenseCategory } from './../../../models/expenseCategory';
import { ExpenseApi } from '../../api/expense.api';
import { PeriodService } from '../../../share/period.service';
import { Period } from '../../../models/period';
import { ExpenseCategoryService } from '../../../share/api/expenseCategory.api';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Expense } from '../../../models/expense';
import { map, switchMap, tap } from 'rxjs/operators';
import { ExpenseDialogComponent, SubmitExpenseCallback } from '../../components/expense-dialog/expense-dialog.component';
import { SnackbarComponent } from './../../../share/components/snackbar/snackbar.component';
import { expenseCategories } from '../../../mocks/expenseCategory.mock';
 
 

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  dataSource = new MatTableDataSource();
 // displayedColumns = ['datetime', 'counterparty','category','value','actions'];
  displayedColumns = ['datetime', 'counterparty','category' ,'value','actions'];
  keyupSubscription: Subscription;
  isLoading = true;
  expenseCategories: ExpenseCategory[] =expenseCategories;
  expenses: Expense[];
  expenseObservable$: Observable<Expense[]>;

  constructor(
    private periodService: PeriodService,
    private expenseApi: ExpenseApi,
    private expenseCategoryService: ExpenseCategoryService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    // this.generateExpenses();
     this.loadTable$().subscribe(() => {
      console.log('[46][expenses component ]', this.dataSource.data);
     });
     this.expenseCategoryService.getAllExpenseCategory().subscribe(data => {
        this.expenseCategories = data;
     });
  }

  openExpenseDialog() {
    const ref=this.dialog.open(ExpenseDialogComponent, {
      data: { 
        categories: this.expenseCategories, 
        expense: null       
      },
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%'
    });
    
    ref.afterClosed().subscribe( result => {
    //  console.log('[Create]After close dialog: ',result);
      this.expenseApi.createExpense(result).subscribe(()=>{
        this.loadTable$();
      })
    });     
  }

  loadTable$() {
    this.isLoading = true;
    this.expenseObservable$ = this.expenseApi.loadExpense();
    return this.expenseObservable$.pipe(
        map( data => {
            this.isLoading = false;
            this.dataSource.data = data;
        })      
    );
  }

  updateOrcreateExpense(expense: Expense) {
       if(expense) {
     //   console.log('[][updateOrcreateExpense][Update][]', expense);
       this.expenseApi.updateExpense(expense).subscribe(() => {
        this.loadTable$();
       });        
       }
  }

  getSubmitExpenseCallback$(): SubmitExpenseCallback {
    return  (expense: Expense) => this.expenseApi.updateOrcreateExpense(expense).pipe(
                  switchMap(()=> this.loadTable$())
            );      
  }

  deleteExpense(idx:string) {
      this.expenseApi.deleteExpense(idx).subscribe(()=> {

        this.loadTable$();
      })
  }

  private showResultSnackbar(message: string) {
     this.snackBar.openFromComponent(SnackbarComponent, {
       duration: 3000,
       data: message
     })
  }

  getLoadTableCallback() {
    return (()=> this.loadTable$());
  }

  filterExpenses(period:Period, category: string) {
    this.expenseApi.filterExpenses(period, category).subscribe(data => console.log('[][][filterExpenses]', data))
  }

  generateExpenses() {
    const randomExpenses = [];
    for (let i = 0; i < 5; i++) {
      randomExpenses.push(
        {
          id: i,
          value: this.getRandomValue(),
          datetime: this.getRandomDate(),
          ...this.getRandomCategory()
        }
      );
     
    }
    console.log(randomExpenses);
    randomExpenses.forEach(expense => this.expenseApi.createExpense(expense));
    return randomExpenses.sort((a, b) => a.datetime - b.datetime);
  }

  getRandomDate() {
    const date = new Date();
    date.setMonth(2);
    date.setDate(Math.random() * 30 + 1);
    return date;
  }
  
   getRandomCategory() {   
     const idx =  Math.floor(Math.random() * this.expenseCategories.length);
    const category = this.expenseCategories[idx];
    const coutnerparty = category.counterpartyPatterns[0];
   
    return {
      category,
      categoryId: category.id,
      categoryName: category.name,
      counterparty: coutnerparty.charAt(0).toUpperCase() + coutnerparty.slice(1)
    };
  }
  
    getRandomValue() {
    return Math.floor(Math.random() * 30000) / 100;
  }



}
