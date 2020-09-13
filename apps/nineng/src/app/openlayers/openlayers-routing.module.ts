import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenlayersComponent } from './openlayers.component';
import { AccessibleComponent } from './layer1/accessible/accessible.component';
import { MapComponent } from './layer1/maps/map.component';

const routes: Routes = [
  {
    path: '', component: OpenlayersComponent, children: [
      { path: 'accessible', component: AccessibleComponent },
      { path: 'mapbox', component: MapComponent }

    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenlayersRoutingModule { }
