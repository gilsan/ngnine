import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './components/kids/kids.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'kids', component: KidsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GisRoutingModule { }
