import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ExpenseCategoryService } from './api/expenseCategory.api';
import { PeriodSelectorComponent } from './components/period-selector/period-selector.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { MaterialModule } from '../../material.module';
 
@NgModule({
   declarations: [
       PeriodSelectorComponent, 
       SnackbarComponent],
   imports: [
       CommonModule,
       HttpClientModule,
       MaterialModule,
   ],
   exports: [],
   providers: [
    ExpenseCategoryService,
  
   ],
})
export class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule,
            providers: [ ExpenseCategoryService],
        };
     }
}
