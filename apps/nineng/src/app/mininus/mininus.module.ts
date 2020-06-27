/*************
  * 
  * https://github.com/hamedbaatour/Minimus
  * 
  */

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// tslint:disable-next-line: max-line-length
import { SvgCircleModule, SvgEllipseModule, SvgLineModule, SvgPathModule, SvgPolygonModule, SvgPolylineModule, SvgrectModule, SvgTextModule } from 'angular-svg';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GaugeChartModule } from 'angular-gauge-chart'
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxGaugeModule } from 'ngx-gauge';
import { MaterialModule } from '../material.module';
import { WidgetModule } from '../widget-library/widget.module';
import { BarComponent } from './charts/bar/bar.component';
import { ChartService } from './charts/chart.service';
import { GaugeComponent } from './charts/gauge/gauge.component';
import { LineComponent } from './charts/line/line.component';
import { PieComponent } from './charts/pie/pie.component';
import { ComponentsModule } from './components/components.module';

import { AComponent } from './components/mgndom/componentref/a-component/a.component';
import { BComponent } from './components/mgndom/componentref/b-component/b.component';
import { CourseResolver } from './components/ngrx/course/course.resolver';
import { AdminComponent } from './css/admin/admin.component';
import { CssModule } from './css/css.module';
import { MenuHoverDirective } from './css/directives/menu-hover.directive';
import { AirbnbComponent } from './css/grid/airbnb/airbnb.component';
import { BasicComponent } from './css/grid/basic/basic.component';
import { FreelancerComponent } from './css/grid/freelancer/freelancer.component';
import { RealComponent } from './css/grid/real/real.component';
import { VlogComponent } from './css/grid/vlog/vlog.component';
import { NetflixComponent } from './css/netflix/netflix.component';
import { AuthService } from './guards/auth.service';
import { Service } from './guards/service';
import { MenuNaviComponent } from './menu-navi/menu-navi.component';
// import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { MininusRoutingModule } from './mininus-routing.module';
import { MininusComponent } from './mininus.component';
import { RackComponent } from './monitor/rack/rack.component';
import { TopologyComponent } from './monitor/topology/topology.component';
import { AuInputComponent } from './ng-advanced-library/au-input/au-input.component';
import { NgModalComponent } from './ng-advanced-library/ng-modal/ng-modal.component';
import { NgTapComponent } from './ng-advanced-library/ng-tap/ng-tap.component';
import { AddComponent } from './pages/add/add.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { FbService } from './services/fb.service';
import { WeatherService } from './services/weather.service';
import { TestComponent } from './test/test.component';
import { TestService } from './test/test.service';
import { AddCardComponent } from './ui/add-card/add-card.component';
import { ErrorComponent } from './ui/error/error.component';
import { WeatherCardComponent } from './ui/weather-card/weather-card.component';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireAuthModule } from '@angular/fire/auth';
// import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
    MininusComponent,
    HomeComponent,
    WeatherCardComponent,
    DetailsComponent,
    AddCardComponent,
    ErrorComponent,
    AddComponent,
    TestComponent,
    LineComponent,
    BarComponent,
    PieComponent,
    GaugeComponent,
    TopologyComponent,
    RackComponent,
    MenuHoverDirective,
    NetflixComponent,
    AdminComponent,
    BasicComponent,
    VlogComponent,
    RealComponent,
    FreelancerComponent,
    AirbnbComponent,
    MenuNaviComponent,
    AuInputComponent,
    NgTapComponent,
    NgModalComponent,
    AComponent,
    BComponent,


  ],
  imports: [


    CommonModule,
    HttpClientModule,
    MininusRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //  AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule,

    AngularFirestoreModule,
    MaterialModule,
    // NguiAutoCompleteModule,
    NgxEchartsModule,
    NgxGaugeModule,
    GaugeChartModule,
    ComponentsModule,
    CssModule,
    // FontAwesomeModule ,
    // BrowserAnimationsModule,
    SvgCircleModule, SvgLineModule, SvgPolygonModule, SvgrectModule, SvgPolylineModule, SvgTextModule, SvgPathModule, SvgEllipseModule,
    WidgetModule,
  ],
  providers: [
    WeatherService,
    FbService,
    ChartService,
    Service,
    TestService,
    AuthService,
    CourseResolver
  ],
  exports: [

  ]
})
export class MininusModule {

}
