import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettingsComponent } from './containers/settings/settings.component';
import { ExpenseCategoryResolver } from './resolvers/expenseCategory.resolver';

const routes: Routes = [
   { path: '',
     component: SettingsComponent,
     resolve: {
         expenseCategories: ExpenseCategoryResolver,
      },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SettingsRouting  {

}
