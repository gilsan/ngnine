import { AccomodationComponent } from './accomodation.component';
import { AmenityComponent } from './rooms/amenity/amenity.component';
import { CheckavailComponent } from './rooms/checkavail/checkavail.component';
import { CloseOpenModalDirective } from './directives/close-open-modal.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { ModalsComponent } from './rooms/modals/modals.component';
import { NgModule } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsDirective } from './directives/rooms.directive';
import { RoomsService } from '../services/rooms.service';

@NgModule({
    declarations: [
        AccomodationComponent,
        RoomsComponent,
        AmenityComponent,
        CheckavailComponent,
        ModalsComponent,
        CloseOpenModalDirective,
        RoomsDirective,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
    ],
    exports: [
        CloseOpenModalDirective,
        ModalsComponent,

    ],
    providers: [
        RoomsService,
    ],
})
export class AccomodationModule {}
