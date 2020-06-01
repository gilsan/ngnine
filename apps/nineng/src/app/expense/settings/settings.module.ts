import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

 
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoriesComponent } from './containers/categories/categories.component';
import { FormCategoryComponent } from './components/form-category/form-category.component';
// tslint:disable-next-line:ordered-imports
import { EditingDialogComponent } from './components/editing-dialog/editing-dialog.component';
// tslint:disable-next-line:ordered-imports
import { MaterialModule } from '../../material.module';
import { SharedModule } from '../share/shared.module';
import { SettingsComponent } from './containers/settings/settings.component';
import { ExpenseCategoryResolver } from './resolvers/expenseCategory.resolver';
import { SettingsFacade } from './settings.facade';
import { SettingsRouting } from './settings.routing.module';
import { SettingsState } from './settings.state';
import { ExpensesComponent } from './containers/expenses/expenses.component';
import { ExpenseDialog } from './containers/expenses/dialog/expense-dialog';
import { ExpensesService } from './containers/expenses/expenses.service';
import { UserModule } from './containers/user/user.module';
 
 
@NgModule({
  declarations: [
    SettingsComponent,
    CategoriesComponent,   
    CategoryListComponent,
    EditingDialogComponent,
    FormCategoryComponent,  
    ExpensesComponent,
    ExpenseDialog,
 
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    SettingsRouting,
    MaterialModule,
    UserModule
  ],
  providers: [
    SettingsFacade,
    SettingsState,
    ExpenseCategoryResolver,
    ExpensesService
  ],
  entryComponents: [
    ExpenseDialog
  ]
})
export class SettingsModule { }
