import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.modult';
import { ExpenseComponent } from './expense.component';
import { ExpenseRouting } from './expense.routing';
import { SharedModule } from './share/shared.module';
  
@NgModule({
  declarations: [
    ExpenseComponent,
  ],
  imports: [
    CommonModule,
    ExpenseRouting,
    CoreModule,
    SharedModule,
    DashboardModule,

  ],
})
export class ExpenseModule { }
