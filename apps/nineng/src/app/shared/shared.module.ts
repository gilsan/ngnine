import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NgModule } from '@angular/core';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';

@NgModule({
    declarations: [
        SidebarMenuComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports:[
        SidebarMenuComponent, 
        MaterialModule
    ],
    providers: []
})
export class SharedModule {
    /*
     공통모듈에 서비스를 모듈에 삽입할때사용
     statuc forRoot() {
         return {
             ngModule: SharedModule,
             providers: [ DateFormatterService] or
             providers: [
                 { provide: DateFormattersService, useValue: culture}
             ]
         }
     }
=================================================================================
    import { Injectable, Optional } from '@angular/core';

    @Injectable()
    export class DateFormattersService {
        constructor(@Optional() private _culture: String) {}
    }

    */
}