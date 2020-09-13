import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './component/map/map.component';
import { BasicComponent } from './component/basic/basic.component';
import { OlProjComponent } from './component/ol-proj/ol-proj.component';
import { MarkersComponent } from './component/markers/markers.component';
import { PopupComponent } from './component/popup/popup.component';
import { ControlComponent } from './component/control/control.component';
import { FeaturesComponent } from './component/features/features.component';
import { TrainingComponent } from './component/training/training.component';
import { CityGuideComponent } from './component/city-guide/city-guide.component';

import { AccessibleComponent } from './component/layer1/accessible/accessible.component';
import { MapboxComponent } from './component/layer1/mapbox/mapbox.component';
import { CenterComponent } from './component/layer1/center/center.component';
import { AttributionComponent } from './component/layer1/attribution/attribution.component';
import { BoxSelectionComponent } from './component/layer1/box-selection/box-selection.component';

const routes: Routes = [
  {
    path: '', component: MapComponent, children: [
      { path: '', component: TrainingComponent },
      { path: 'basemap', component: TrainingComponent },
      { path: 'basic-setup', component: BasicComponent },
      { path: 'ol-proj-setup', component: OlProjComponent },
      { path: 'custom-markers', component: MarkersComponent },
      { path: 'simple-popup', component: PopupComponent },
      { path: 'custom-control', component: ControlComponent },
      { path: 'clustered-features', component: FeaturesComponent },
      { path: 'city-guide', component: CityGuideComponent },
      { path: 'accessible', component: AccessibleComponent },
      { path: 'attributions', component: AttributionComponent },
      { path: 'mapbox', component: MapboxComponent },
      { path: 'center', component: CenterComponent },
      { path: 'box-selection', component: BoxSelectionComponent },
    ]
  },

];


@NgModule({
  imports: [

    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: [],
})
export class MapRoutingModule { }