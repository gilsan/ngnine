import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';
import { RandomService } from '../services/random.service';
import { IUser } from '../models/models';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-domarray',
  templateUrl: './domarray.component.html',
  styleUrls: ['./domarray.component.scss'],
})
export class DomarrayComponent implements OnInit, OnDestroy {

  randomObservable$: Observable<any>;
  private subs = new SubSink();
  user: IUser[] = [];
  grandTotal = 0;

  constructor(
    private randomService: RandomService,
  ) { }

  ngOnInit(): void {
  }

  getData() {
    return this.randomService.getRandomSubscribe();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  addUser() {
    this.randomObservable$ = this.randomService.getRandomUser();
    this.subs.sink = this.randomObservable$.subscribe((data) => {
      const name = `${data['results'][0].name.first} ${data['results'][0].name.last}`;
      const money = Math.floor(Math.random() * 10000);
      this.addData(name, money);
    });
  }

  addData(name: string, money: number) {
    this.user.push({ name, money });
  }

  makeDouble() {
    this.user = this.user.map((item) => {
      return { ...item, money: item.money * 2 };
    });
  }

  showMillionaire() {
    this.user = this.user.filter((item) => item.money > 5000);
  }

  doSort() {
    this.user = this.user.sort((a, b) => {
      return a.money - b.money;
    });
  }

  doSum() {
    this.grandTotal = this.user.reduce((acc, user) => acc += user.money, 0);
  }

}
