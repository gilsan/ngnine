import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './containers/dashboard/dashboard.component';


@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [    
    
CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    ],
    exports: [
        DashboardComponent
    ],
    providers: [],
})
export class DashboardModule {

}