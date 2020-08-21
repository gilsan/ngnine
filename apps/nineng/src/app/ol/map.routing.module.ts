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
      { path: 'clustered-features', component: FeaturesComponent }
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