import { FormBuilder, FormArray, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.scss']
})
export class FlexComponent implements OnInit {


  direction ='row';
  public videoArray: FormArray = new FormArray([]);
  constructor(
    private fb: FormBuilder,
  ) { }


  items = ["one", "two","three","four","five"];
  addresses = [
    "금강산","아차산","백두산","한라산"
  ];


  form: FormGroup
  ngOnInit() {
      this.form=  this.fb.group({
         name: [],
         address: this.addVideoArray(),
      })
  }

  addVideoArray(): FormArray {
      this.addresses.forEach(address=> this.videoArray.push(new FormControl(address)));

    return this.videoArray;
  }

  moveExerciseto(item,newIndex){

       if( newIndex > this.items.length || newIndex < 0 ){

         return;
       }

       const currentIndex = this.items.indexOf(item);
       const currentVal = this.items.splice(newIndex,0);

      this.items.splice(newIndex,0,this.items.splice(currentIndex,1)[0]);

  }



}
