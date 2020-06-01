import { Component, OnInit } from '@angular/core';
import { map, startWith } from 'rxjs/operators';

import { FormControl } from '@angular/forms';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-rxjspart1',
  templateUrl: './rxjspart1.component.html',
  styleUrls: ['./rxjspart1.component.scss']
})
export class Rxjspart1Component implements OnInit {

 buttonClass='';
  users = [
     { name: 'John', id: 1},
     { name: 'Andrew', id: 2},
     { name: 'Anna', id: 3},
     { name: 'Iris', id: 4}
  ];

  blackListedUsers       = new FormControl([]);
  selectedUserId        = new FormControl(null);
  allowBlackListedUsers = new FormControl(false);

  isDisabled$ = combineLatest([
     this.allowBlackListedUsers.valueChanges.pipe( startWith(false) ),
     this.blackListedUsers.valueChanges.pipe( startWith([])),
     this.selectedUserId.valueChanges.pipe(startWith(null), map(id => +id))
  ]).pipe(
    map(
      ([allowBlackListed,blackList, selected]) => !allowBlackListed && blackList.includes(selected),
    ),
  );

  


  constructor() { }

  ngOnInit(): void {
    this.allowBlackListedUsers.valueChanges.subscribe(data=> {
      console.log('allowBlackListedUsers: ', data);
    });
    this.blackListedUsers.valueChanges.subscribe(data=> {
      console.log('blackListedUsers: ', data);
    });

    this.selectedUserId.valueChanges.subscribe(data=> {
      console.log('selectedUserId: ', data);
    });   
    
    this.isDisabled$.subscribe(data => { 
      if(data) {
        this.buttonClass='button-disabled';
      } else {
        this.buttonClass='button';
      }
    })

  }

  submit() {
    this.isDisabled$.subscribe(data => console.log('확인:', data))
   
  }

 

}
