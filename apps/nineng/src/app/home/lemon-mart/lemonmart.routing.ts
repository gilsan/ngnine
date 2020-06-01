/*********
 * https://github.com/duluca/lemon-mart
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LemonmartComponent } from './lemonmart.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ManagerHomeComponent } from './manager/manager-home/manager-home.component';
import { UserManagementComponent } from './manager/user-management/user-management.component';
import { ReceiptLookupComponent } from './manager/receipt-lookup/receipt-lookup.component';
// import { StockEntryComponent } from './inventory/stock-entry/stock-entry.component';
// import { ProductsComponent } from './inventory/products/products.component';
// import { CategoriesComponent } from './inventory/categories/categories.component';

const routes: Routes = [   

    { path: '', component: LemonmartComponent, children: [
        { path: '', redirectTo: 'home'},
        { path: 'home',component: ManagerHomeComponent},
        { path: 'profile', component: ProfileComponent},
        { path: 'users', component: UserManagementComponent},
        { path: 'receipts', component: ReceiptLookupComponent},
       // { path: 'stockEntry', component: StockEntryComponent},
      //  { path: 'products', component: ProductsComponent},
      //  { path: 'categories', component: CategoriesComponent},
        { path: 'inventory', children: [
            {path: '', loadChildren: () => import('./inventory/inventory.module').then(m=>m.InventoryModule)},
        ]},
        { path: 'pos', children: [
            { path: '', loadChildren: () => import('./pos/pos.module').then(m=> m.PosModule) }
        ]}
      ] 
    },
    
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
     ],
     exports: [
       RouterModule,
     ]
})
export class LemonmartRoutingModule {

}