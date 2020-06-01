import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Irates } from '../models/models';
import { ExchangeService } from '../services/exchange.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-exchangerate',
  templateUrl: './exchangerate.component.html',
  styleUrls: ['./exchangerate.component.scss'],
})
export class ExchangerateComponent implements OnInit {

  rates$: Observable<Irates>;
  currencyOne = 'USD';
  currencyTwo = 'EUR';
  oneAmount = 1;
  twoAmount = 0;

  constructor(
    private exrateService: ExchangeService,
  ) { }

  ngOnInit(): void {
    this.getExrates(this.currencyOne);

  }

  getExrates(country: string) {
    this.rates$ = this.exrateService.getExchangeRate(country);
    this.rates$
      .pipe(
        map((data) => data.rates),
      )
      .subscribe((rates) => {
        Object.keys(rates).forEach((key) => {
          if (key === this.currencyTwo) {
            this.twoAmount = +rates[key].toFixed(2);
          }
        });
      });
  }

  onCalculateOne(currencyOne: string) {
    this.currencyOne = currencyOne;
    this.getExrates(currencyOne);
  }

  onCalculateTwo(currencyTwo: string) {
    this.currencyTwo = currencyTwo;
  }

  onAmountOne(amountOne: number) {
    this.twoAmount = +(amountOne * this.twoAmount).toFixed(2);
  }

  onAmountTwo(amountTwo: number) {
    this.twoAmount = amountTwo;
  }

}
