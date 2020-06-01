import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
 
import { Expense } from '../../../models/expense';
import { ExpenseCategory } from '../../../models/expenseCategory';
import { ExpenseApi } from '../../api/expense.api';

export interface DialogData {
  categories?: ExpenseCategory[];
  expense?: Expense;
  callback$: SubmitExpenseCallback
}

export type SubmitExpenseCallback = (expense: Expense)=> Observable<void>;

@Component({
  selector: 'app-expense-dialog',
  templateUrl: './expense-dialog.component.html',
  styleUrls: ['./expense-dialog.component.scss']
})
export class ExpenseDialogComponent implements OnInit {
  expenseCategory: ExpenseCategory= {
    idx: '',
    id: '',
    accountId: '',
    name: '',
    counterpartyPatterns:[]
  };

  categories: ExpenseCategory[] = [];
  expense: Expense;
  submitText: string;
  title: string;
  expenseForm: FormGroup;
  state: string;

  constructor(
    public dialogRef: MatDialogRef<ExpenseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public fb: FormBuilder,
    private expenseApi: ExpenseApi,
  ) { }

  ngOnInit(): void {
     console.log('[][][dialog] ',this.data);
     this.expense = this.data.expense ? this.data.expense : new Expense();
     this.categories = this.data.categories;
     this.submitText = this.data.expense ? '수정' : '저장';
     this.title = this.data.expense ? '경비 수정': '경비 추가';
     this.state = this.data.expense ? 'update' : 'save';
     this.initForm();
  }

  initForm() {
    this.expenseForm = this.fb.group({
         idx: [this.expense.idx],
         datetime: [this.expense.datetime],
         counterparty: [this.expense.counterparty],
         categoryId: [this.expense.categoryId],
         value: [this.expense.value],
         name:[this.expense.name]
    })
  }

  submit() {   
    const { idx, name, ...expense} = this.expenseForm.value;
    console.log('[submit][expenseForm.value]', this.expenseForm.value) 
    // this.expenseCategory.name = name
    // this.expenseCategory.accountId= 1;   
    // this.expenseCategory.counterpartyPatterns=[];
    // this.expense.counterparty = this.expenseForm.value.counterparty;
    // const ex = new Expense(expense);
    // ex.category = this.expenseCategory;
    // const newExpense = ex; 
    
     const temp = {
       idx: idx,
       category: {
           accountId: 1,
           counterpartyPatterns: [],
           name: name
       },
       datetime: new Date(),
       counterparty: this.expenseForm.value.counterparty,
       id: 3,
       value: 100,
       name: name
     };
     
    //  console.log(temp);
      this.dialogRef.close(temp);
  //  this.data.callback$(this.expenseForm.value).subscribe(()=> this.dialogRef.close())
  }

  update() {    
    this.dialogRef.close(this.expenseForm.value);    
  }

  cancel() {   
    this.dialogRef.close();
  }

}
