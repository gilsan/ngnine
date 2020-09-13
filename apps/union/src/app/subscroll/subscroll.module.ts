import { CommonModule } from '@angular/common';
import { NavbarsComponent } from './navbars/navbars.component';
import { NgModule } from '@angular/core';
import { ScrollComponent } from './scroll/scroll.component';
import { SubscrollComponent } from './subscroll.component';
import { SubscrollRouting } from './subscroll.routing';
import { WINDOW_PROVIDERS } from '../window.service';
import { MaterialModule } from '../material.module';

@NgModule({
    declarations: [
        ScrollComponent,
        SubscrollComponent,
        NavbarsComponent
    ],
    imports: [
        CommonModule,
        SubscrollRouting,
        MaterialModule
    ],
    exports: [],
    providers: [
        WINDOW_PROVIDERS
    ]
})
export class SubscrollModule { }
