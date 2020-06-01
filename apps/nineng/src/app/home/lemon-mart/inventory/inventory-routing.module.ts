import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryHomeComponent } from './inventory-home/inventory-home.component';
import { StockEntryComponent } from './stock-entry/stock-entry.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';


const routes: Routes = [
  { path: '',  children:
    [
       { path: '', redirectTo: 'inventory'},
       { path: 'inventory',  component: InventoryHomeComponent },
       { path: 'stockEntry', component: StockEntryComponent},
       { path: 'products',   component: ProductsComponent},
       { path: 'categories', component: CategoriesComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
