import { expenseCategories } from './expenseCategory.mock';
import { Period } from '../models/period';
import { BudgetDefinition } from '../models/budgetDefinition';
 
 

const period = new Period(4, 2020);

export const budgetDefinition: BudgetDefinition[] = [
  {
    id: 1,
    period: {month: period.month, year: period.year},
    category: expenseCategories[0],
    maxExpenses: 2000
  },
  {
    id: 2,
    period: {month: period.month, year: period.year},
    category: expenseCategories[1],
    maxExpenses: 500
  },
  {
    id: 3,
    period: {month: period.month, year: period.year},
    category: expenseCategories[2],
    maxExpenses: 1000
  },
  {
    id: 4,
    period: {month: period.month, year: period.year},
    category: expenseCategories[3],
    maxExpenses: 1200
  },
  {
    id: 5,
    period: {month: period.month, year: period.year},
    category: expenseCategories[4],
    maxExpenses: 2000
  }

];
