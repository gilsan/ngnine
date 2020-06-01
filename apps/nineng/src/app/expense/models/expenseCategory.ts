import { Id } from './types';

export interface ExpenseCategory { 
         idx?: string;  
         id?: Id;
         accountId?: Id;
         name: string ;
         counterpartyPatterns: string[];
}
