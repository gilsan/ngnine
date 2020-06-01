import { Injectable } from '@angular/core';
import { Period } from '../models/period';

@Injectable({
    providedIn: 'root'
})
export class PeriodService {

  private period: Period;

  getCurrentPerid() {
      if (!this.period) {
          this.period = new Period(4,2020);
      }
      return this.period;
  }

}