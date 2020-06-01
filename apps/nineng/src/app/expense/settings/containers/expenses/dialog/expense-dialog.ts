import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExpenseList } from '../models/expense-list.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { List } from '../models/itemlist.model';
 
export interface DialogData  {
   lists: ExpenseList[]
}

@Component({
    selector: 'app-expense-dialog',
    templateUrl: './expense-dialog.component.html', 
    styleUrls:['./expense-dialog.component.scss']
  })
export class ExpenseDialog  implements OnInit {

    listForm: FormGroup;
    lists: List[] =[];
    constructor(
        public dialogRef: MatDialogRef<ExpenseDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        private fb: FormBuilder,
    ) {}

    ngOnInit(): void {
         console.log('[][dialog] ', this.data);
    }

    initForm() {
        this.listForm = this.fb.group({
            idx:[],
            id: [],
            category: [],
            date: [],
            items:[]
        })
    }

    createExpense() {}

    updateExpense() {}

    cancelExpense() {
        this.dialogRef.close();
    }

}