import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
 

@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.scss']
})
export class LifestyleComponent implements OnInit {

  constructor(
    private db: AngularFirestore
  ) { }

  ngOnInit(): void {
  }

}
