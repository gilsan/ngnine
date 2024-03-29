import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { PianoComponent } from './piano/piano.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ZoomCloneComponent } from './zoom-clone/zoom-clone.component';
import { CropperComponent } from './cropper/cropper.component';

// import { LazyMainComponent } from './lazyload/lazymain.component';
// import { LazymoduleComponent } from './lazymodule/lazymodule.component';
// import { LemonmartComponent } from './lemon-mart/lemonmart.component';

const routes: Routes = [
   {
      path: '', component: HomeComponent, children: [
         { path: 'piano', component: PianoComponent },
         {
            path: 'lemon', children: [
               { path: '', loadChildren: () => import('./lemon-mart/lemonmart.module').then((m) => m.LemonmartModule) },
            ]
         },
         { path: 'recipe', component: RecipeComponent },
         { path: 'contact', component: ZoomCloneComponent },
         { path: 'cropper', component: CropperComponent },
      ],
   },

];

@NgModule({
   imports: [
      RouterModule.forChild(routes),
   ],
   exports: [
      RouterModule,
   ]
})
export class HomeRoutingModule {

}
