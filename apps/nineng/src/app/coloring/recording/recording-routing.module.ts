import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MgnComponent } from './mgn/mgn.component';
import { ReceiveComponent } from './receive/receive.component';
import { RecordingComponent } from './recording.component';
import { SendComponent } from './send/send.component';

const routes: Routes = [
      { path: '', component: RecordingComponent, children: [
           { path: '',  redirectTo: 'receive', pathMatch: 'full' },
           { path: 'receive', component: ReceiveComponent},
           { path: 'send', component: SendComponent},
           { path: 'mgn', component: MgnComponent},
        ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordingRoutingModule { }
