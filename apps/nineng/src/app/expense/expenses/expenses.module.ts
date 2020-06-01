import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './containers/expenses/expenses.component';
import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';
import { ExpenseDialogComponent } from './components/expense-dialog/expense-dialog.component';
import { ExpenseTableComponent } from './components/expense-table/expense-table.component';
import { MaterialModule } from '../../material.module';
import { SharedModule } from '../share/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExpensesComponent, ConfirmDeleteComponent, ExpenseDialogComponent, ExpenseTableComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ExpensesRoutingModule,
    SharedModule
  ],
  entryComponents: [
    ExpenseDialogComponent
  ]
})
export class ExpensesModule { }
