import { NgModule } from '@angular/core';
import { AccessibleComponent } from './accessible/accessible.component';
import { MapboxComponent } from './mapbox/mapbox.component';
import { CenterComponent } from './center/center.component';
import { AttributionComponent } from './attribution/attribution.component';
import { BoxSelectionComponent } from './box-selection/box-selection.component';
//  Google Key: AIzaSyAu0ATUX7B1ZbvWSlHMDQlo9NcqmzpNXuI

@NgModule({
  declarations: [
    AccessibleComponent,
    MapboxComponent,
    CenterComponent,
    AttributionComponent,
    BoxSelectionComponent,
  ]
})
export class Layer1Module { }