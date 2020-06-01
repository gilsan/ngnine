import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './core/layout/layout.component';
import { ExpenseComponent } from './expense.component';
// import { ExpensesModule } from './expenses/expenses.module';
import { DashboardComponent } from './dashboard/containers/dashboard/dashboard.component';

const routes: Routes = [
    { path: '', component: ExpenseComponent, children: [
        { path: '', redirectTo: 'layout'},
        { path: 'layout', component: LayoutComponent, 
           children: [
             //   { path: 'dashboard',component: DashboardComponent},
                { path: 'settings', loadChildren: ()=> import('./settings/settings.module').then(m => m.SettingsModule)},
                { path: 'expenses', loadChildren: ()=> import('./expenses/expenses.module').then(m=>m.ExpensesModule)}
           ]},       
      ]
    },    
];

 @NgModule({
     imports: [
   RouterModule.forChild(routes)
     ],
     exports: [
         RouterModule
     ]
    
 })
export class ExpenseRouting {

}