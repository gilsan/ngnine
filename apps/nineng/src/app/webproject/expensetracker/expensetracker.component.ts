import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IExpense } from '../models/models';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-expensetracker',
  templateUrl: './expensetracker.component.html',
  styleUrls: ['./expensetracker.component.scss']
})
export class ExpensetrackerComponent implements OnInit {
  source = 'https://github.com/gilsan/ngnine/tree/master/apps/nineng/src/app/webproject/expensetracker';

  safeurl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustUrl(this.source);
  dummyTrasactions: IExpense[] = [];
  amount: number[] = [];
  balance = 0;
  income: number[] = [];
  totalIncome = 0;
  expense: number[] = [];
  totalExpense = 0;

  expenseForm: FormGroup;
  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
    private fb: FormBuilder,
  ) { }

  ngOnInit(
  ): void {
    this.formInit();
    this.init();

  }

  formInit() {
    this.expenseForm = this.fb.group({
      text: [],
      amount: [],
    });
  }

  init() {
    this.dummyTrasactions.push({ id: 1, text: '장미10송이', amount: -5000 });
    this.dummyTrasactions.push({ id: 2, text: '개발용역비', amount: 50000 });
    this.dummyTrasactions.push({ id: 3, text: '점심', amount: -5000 });
    this.dummyTrasactions.map((item) => {
      this.amount.push(item.amount);
      if (item.amount > 0) {
        this.income.push(item.amount);
      } else {
        this.expense.push(item.amount);
      }
    });

    this.balance = this.amount.reduce((acc, item) => (acc += item), 0);
    this.totalIncome = this.income.reduce((acc, item) => (acc += item), 0);
    this.totalExpense = Math.abs(this.expense.reduce((acc, item) => (acc += item), 0));
  }

  updateExpense(amount: number) {
    this.balance = this.balance + amount;
    if (amount > 0) {
      this.totalIncome += amount;
      this.balance = this.totalIncome - this.totalExpense;
    } else {
      this.totalExpense += Math.abs(amount);
      this.totalIncome += amount;
      this.balance = this.totalIncome + amount;
    }
  }

  deleteItem(id: number) {
    this.dummyTrasactions.splice(id, 1);
  }

  addItem() {
    const len = this.dummyTrasactions.length;
    const newExpense = {
      id: len,
      text: this.expenseForm.value.text,
      amount: +this.expenseForm.value.amount,
    };
    this.dummyTrasactions = [...this.dummyTrasactions, newExpense];
    this.updateExpense(+this.expenseForm.value.amount);
    this.expenseForm.reset();
  }

}
