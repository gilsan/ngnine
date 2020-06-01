import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ScrollComponent } from './scroll/scroll.component';
import { SubscrollComponent } from './subscroll.component';

const routes: Routes = [ 
  { path: '',  component: SubscrollComponent, children: [
  //  {path: '', component: ScrollComponent},
    {path: 'subscroll', component: ScrollComponent }
  
  ]}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SubscrollRouting {}
