import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AccomodationModule } from './accomodation/accomodation.module';
import { AuthComponent } from './auth/auth.component';
import { BarsComponent } from './food-beverage/bars/bars.component';
import { CelebrationComponent } from './celebration/celebration.component';
import { CommonModule } from '@angular/common';
 
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { HeaderComponent } from './navigation/header/header.component';
import { HomeComponent } from './home/home.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { MaterialModule } from '../material.module';
import { NavbarsComponent } from './navigation/navbars/navbars.component';
import { OffersComponent } from './offers/offers.component';
 
import { ResortActivitiesComponent } from './lifestyle/resort-activities/resort-activities.component';
import { RestaurantComponent } from './food-beverage/restaurant/restaurant.component';
import { RoomsService } from './services/rooms.service';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ThaiWeddingsComponent } from './weddings/thai-weddings/thai-weddings.component';
import { TheaHotelRouting } from './theahotel.routing';
import { TheahotelComponent } from './theahotel.component';
import { WINDOW_PROVIDERS } from './services/window.service';
import { WeddingsComponent } from './weddings/weddings.component';
import { WelnessAndSpaComponent } from './lifestyle/welness-and-spa/welness-and-spa.component';
import { WesternsWeddingsComponent } from './weddings/westerns-weddings/westerns-weddings.component';
import { WidgetModule } from '../widget-library/widget.module';
import { HotelModal } from './lifestyle/hotel-modal/hotel-modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
 
@NgModule({
  declarations: [
       TheahotelComponent, FoodBeverageComponent, RestaurantComponent, BarsComponent,
       AuthComponent, SigninComponent, SignupComponent, CelebrationComponent,
       HomeComponent, LifestyleComponent, ExcursionsComponent, ExperiencesComponent,
       ResortActivitiesComponent, WelnessAndSpaComponent, HeaderComponent,
       NavbarsComponent, SidenavListComponent, OffersComponent, WeddingsComponent,
       ThaiWeddingsComponent, WesternsWeddingsComponent,
       HotelModal,
        
      ],
  imports: [
    CommonModule,
    MaterialModule,
    TheaHotelRouting,
    AccomodationModule,

    CarouselModule,
    WidgetModule,
    NgbModule,
     
  ],
  providers: [
    RoomsService,
    WINDOW_PROVIDERS,
  ],
})
export class TheahotelModule { }
