import { Component, ViewChild, ViewChildren, QueryList, ChangeDetectorRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExpenseDialog } from './dialog/expense-dialog';
import { ExpensesService } from './expenses.service';
import { ExpenseList } from './models/expense-list.model';
import { DataSource } from '@angular/cdk/collections';
 
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';


import { trigger, state, style, transition, animate } from '@angular/animations';
import { filter, first, tap } from 'rxjs/operators';
import { User, Address } from './models/users.model';
 
@Component({
    selector: 'app-expenses',
    templateUrl: './expenses.component.html', 
    styleUrls:['./expenses.component.scss'],
    animations: [
      trigger('detailExpand', [
        state('collapsed', style({height: '0px', minHeight: '0'})),
        state('expanded', style({height: '*'})),
        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      ])]
  })
export class ExpensesComponent implements OnInit {
 
  dataSource: MatTableDataSource<User>;
  usersData: User[] = [];
  columnsToDisplay = ['name', 'email', 'phone'];
  innerDisplayedColumns = ['city','street', 'zipCode'];
  expandedElement: User | null;

  constructor(
    public dialog: MatDialog,
    public service: ExpensesService,
   
  ) {}

  ngOnInit(): void {
      this.service.getUsers()
        .subscribe(users => {
             users.forEach((user:User) => {
              if (user.addresses && Array.isArray(user.addresses) && user.addresses.length) {
                this.usersData = [...this.usersData, {...user, addresses: new MatTableDataSource(user.addresses)}];
              } else {
                this.usersData = [...this.usersData, user];
              }
           }); 
           this.dataSource = new MatTableDataSource(this.usersData);               
        });
  }

  toggleRow(element: User) {
     
    if (this.expandedElement === element) {
        this.expandedElement = null;
    } else {
      if(element.addresses) {
        this.expandedElement = element;
      } else {
        this.expandedElement = null;
      }
      
    }
    
  }

 




  openExpenseDialog() {
    //  const dialogRef = this.dialog.open(ExpenseDialog, {
    //     data: {
    //       lists: this.dataSource,
    //     }, 
    //     maxWidth: '100vw',
    //     maxHeight: '100vh',
    //     height: '100%',
    //     width: '100%'
    //  }); 
     
    //  dialogRef.afterClosed().subscribe(() => {
    //    console.log('close ...');
    //  })
  }
 

}