import { Component, OnInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@ngnine/api-interfaces';
import { ExpenseFirebaseService } from './expense-firebase.service';
// import { ExpenseCategoryService } from './expense/share/api/expenseCategory.api';

@Component({
  selector: 'ngnine-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  constructor(
    private http: HttpClient,
    private service: ExpenseFirebaseService,
    ) {}  

    ngOnInit() {
      // this.service.getAllExpenses().subscribe( data => {
      //   console.log('[][app]',data);
      // });
    }
 


}

/*******
 * 
 *  https://ngsubject.firebaseapp.com
 */
