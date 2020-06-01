import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpenseCategory } from '../../../models/expenseCategory';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {

  @Input() categories$: Observable<ExpenseCategory[]>;
  @Output() categoryUpdate: EventEmitter<ExpenseCategory> = new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
   // this.categories$.subscribe( (data) => console.log('[][CategoryListComponent][]', data));
  }
 
  categoryUpdated(evt) {
  //  console.log('[][category list][update] ', evt);
    this.categoryUpdate.emit(evt);

  }

}
