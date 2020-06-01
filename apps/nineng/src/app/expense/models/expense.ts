
import { ExpenseCategory } from './expenseCategory';
import { Id } from './types';
import { Period } from './period';

export class Expense {
    public category?: ExpenseCategory;

    constructor(
        public id?: Id,
        public accountId: Id = '',
        public value: number =0,
        public datetime: Date = new Date(),
        public period: Period| null = null,
        public categoryId: Id = '',
        public counterparty: string ='',
        public idx?: string,
        public name?: string,
    ) {}
}