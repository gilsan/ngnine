import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { ExpenseCategory } from './expense-model';
import { expenseCategories } from './expense-mock';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.scss']
})
export class FormarrayComponent implements OnInit {

  angGroup: FormGroup;
   
   @Input() category: ExpenseCategory;
   @Output() categoryAdded: EventEmitter<ExpenseCategory>= new EventEmitter();
  constructor(
    public fb: FormBuilder,

  ) { }
  
  ngOnInit(): void {
     this.makeForm();
    // console.log(this.angGroup);
  }

  makeForm() {
     const patternsInitial = this.category.counterpartyPatterns
           .map(pattern => this.createPatternInput(pattern));
         
     this.angGroup = this.fb.group({
       id: [this.category.id],
       name: [this.category.name],
       patterns: this.fb.array(patternsInitial)
    });
  }

  createPatternInput(value: string) {
    return new FormControl(value, [Validators.required]);
  }

  get patterns():FormArray {
     return this.angGroup.get('patterns') as FormArray;
  }

  addCategory() {
    this.categoryAdded.emit(this.angGroup.value);
    this.angGroup.reset();
  }

  addPattern() {
    this.patterns.push(this.createPatternInput(''));
  }

  delete(idx:number){
    this.patterns.removeAt(idx);
  }

}
