import { RouterModule, Routes } from '@angular/router';

import { AccomodationComponent } from './accomodation/accomodation.component';
import { CelebrationComponent } from './celebration/celebration.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { HomeComponent } from './home/home.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { NgModule } from '@angular/core';
import { OffersComponent } from './offers/offers.component';
import { TheahotelComponent } from './theahotel.component';

const routes: Routes = [   

    { path: '', component: TheahotelComponent, children: [
      { path: '', redirectTo: 'home'},
      { path: 'home', component: HomeComponent },
      { path: 'accommodation', component: AccomodationComponent },
      { path: 'foodandberverage', component: FoodBeverageComponent},
      { path: 'lifestyle', component: LifestyleComponent},
      { path: 'celebrations', component: CelebrationComponent},
      { path: 'offers', component: OffersComponent}
    ]  }, 
    
    
];


@NgModule({
    imports: [
        RouterModule.forChild(routes)
     ],
     exports: [
       RouterModule,
     ]
})
export class TheaHotelRouting {

}