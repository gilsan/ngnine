import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ExpenseCategory } from '../../../models/expenseCategory';


@Component({
    selector: 'app-formcategory',
    templateUrl: './formcategory.component.html',
    styleUrls: ['./formcategory.component.scss']
})
export class FormCategoryComponent implements OnInit {

    angGroup: FormGroup;

    @Input() category: ExpenseCategory;
    @Input() editMode: boolean =false;
    @Output() categoryAdded: EventEmitter<ExpenseCategory> = new EventEmitter();
    @Output() categoryUpdated: EventEmitter<ExpenseCategory> = new EventEmitter();
    constructor(
        public fb: FormBuilder,
    ) {}

    ngOnInit() {             
        this.makeForm();
    }

    makeForm() {
        const patternsInitial = this.category.counterpartyPatterns
              .map(pattern => this.createPatternInput(pattern));   
        this.angGroup = this.fb.group({
          idx: [this.category.idx],
          id: [this.category.id],
          name: [this.category.name],
          counterpartyPatterns: this.fb.array(patternsInitial)
       });
     }
   
     createPatternInput(value: string) {
       return new FormControl(value, [Validators.required]);
     }
   
     get counterpartyPatterns():FormArray {
        return this.angGroup.get('counterpartyPatterns') as FormArray;
     }

     addCategory() {
       console.log('[]',this.angGroup.value.name.length)
        if(this.angGroup.value.name.length >2) {
          this.categoryAdded.emit(this.angGroup.value);
          this.angGroup.reset();
        }

      }
    
      addPattern() {
        this.counterpartyPatterns.push(this.createPatternInput(''));
      }
    
      delete(idx:number){
        this.counterpartyPatterns.removeAt(idx);
        this.categoryUpdated.emit(this.angGroup.value);
      }

      updatedCategory() {
         this.categoryUpdated.emit(this.angGroup.value);
         this.angGroup.markAsPristine();
      }

}