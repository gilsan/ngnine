import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'apps/nineng/src/app/material.module';
import { UserComponent } from './containers/user.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { HasRelativeTableComponent } from './components/has-relative-table/has-relative-table.component';
import { HasPhoneTableComponent } from './components/has-phone-table/has-phone-table.component';

@NgModule({
    declarations: [
        UserComponent,
        TableRowComponent,
        HasRelativeTableComponent,
        HasPhoneTableComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        MaterialModule
    ],
    providers: [],
    exports: [
        UserComponent,
        TableRowComponent, 
    ]
})
export class UserModule {}