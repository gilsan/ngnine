import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ExpenseCategory } from '../../models/expenseCategory';
import { SettingsFacade } from '../settings.facade';

@Injectable()
export class ExpenseCategoryResolver implements Resolve<ExpenseCategory[]> {

      constructor(
          private settingsFacade: SettingsFacade,
      ) {}

      resolve(
          route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot,
          ): Observable<ExpenseCategory[]> {
             return   null;
          }

}
