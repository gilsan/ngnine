import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { PianoComponent } from './piano/piano.component';

// import { LazyMainComponent } from './lazyload/lazymain.component';
// import { LazymoduleComponent } from './lazymodule/lazymodule.component';
// import { LemonmartComponent } from './lemon-mart/lemonmart.component';

const routes: Routes = [   
    { path: '', component: HomeComponent,  children: [
          { path: 'piano', component: PianoComponent },
          { path: 'lemon', children: [
              { path: '', loadChildren: ()=> import('./lemon-mart/lemonmart.module').then(m=> m.LemonmartModule)}
          ] },

         
       ] 
    },
    
];

@NgModule({
   imports: [
      RouterModule.forChild(routes)
   ],
   exports: [
     RouterModule,
   ]
})
export  class  HomeRoutingModule {

} 