import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { MaterialModule } from '../material.module';
import { AdminComponent } from './admin/admin.component';
import { CalendarHeadComponent } from './admin/calendar-header/calendar-head/calendar-head.component';
import { CalendarHeaderComponent } from './admin/calendar-header/calendar-header.component';
import { ColoringlistComponent } from './admin/coloringlist/coloringlist.component';
import { FullCalendarComponent } from './admin/full-calendar/full-calendar.component';
import { SideLogoComponent } from './admin/side-navigation/side-logo/side-logo.component';
import { SideNavigationComponent } from './admin/side-navigation/side-navigation.component';
import { ThemeSelectComponent } from './admin/toolbar/theme-select/theme-select.component';
import { ToolbarMenuComponent } from './admin/toolbar/toolbar-menu/toolbar-menu.component';
import { ToolbarComponent } from './admin/toolbar/toolbar.component';
import { ColoringRouting } from './coloring.routing';
import { ColoringmgnModule } from './coloringmgn/coloringmgn.module';
import { RecordingModule } from './recording/recording.module';
import { StaticsModule } from './statics/statics.module';

@NgModule({
    declarations: [
        AdminComponent,
        ToolbarComponent,
        ThemeSelectComponent,
        ToolbarMenuComponent,
        SideNavigationComponent,
        SideLogoComponent,
        CalendarHeadComponent,
        CalendarHeaderComponent,
        ColoringlistComponent,
        FullCalendarComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ColoringRouting,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        FlatpickrModule.forRoot(),
        FlexLayoutModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        }),
        NgbModule,
        NgbPaginationModule,
        ColoringmgnModule,
        RecordingModule,
        StaticsModule,
    ],
    providers: [
      //  { provide: LOCALE_ID, useValue: 'ko'},
    ],
})
export class ColoringModule {}
