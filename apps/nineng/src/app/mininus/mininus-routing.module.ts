import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { BarComponent } from './charts/bar/bar.component';
import { GaugeComponent } from './charts/gauge/gauge.component';
import { LineComponent } from './charts/line/line.component';
import { PieComponent } from './charts/pie/pie.component';
import { DirectiveComponent } from './components/directive/directive.component';
// import { FormarrayComponent } from './components/formarray/formarray.component';
import { FormsComponent } from './components/forms/forms.component';
import { ClassproComponent } from './components/injector/classpro/classpro.component';
import { FactoryproComponent } from './components/injector/factorypro/factorypro.component';
import { ValueproComponent } from './components/injector/valuepro/valuepro.component';
import { LazyMainComponent } from './components/lazyload/lazymain.component';
import { LazymoduleComponent } from './components/lazymodule/lazymodule.component';
import { ComponentrefComponent } from './components/mgndom/componentref/componentref.component';
import { ElementrefComponent } from './components/mgndom/elementref/elementref.component';
import { NgtemplateoutletComponent } from './components/mgndom/ngtemplateoutlet/ngtemplateoutlet.component';
import { TemplaterefComponent } from './components/mgndom/templateref/templateref.component';
import { ViewContainerrefComponent } from './components/mgndom/view-containerref/view-containerref.component';
import { ViewChildComponent } from './components/mgndom/viewchild/viewchild.component';
import { ViewrefComponent } from './components/mgndom/viewref/viewref.component';
import { CourseComponent } from './components/ngrx/course/course.component';
import { CourseResolver } from './components/ngrx/course/course.resolver';
import { LoginComponent } from './components/ngrx/login/login.component';
import { NgrxComponent } from './components/ngrx/ngrx.component';
import { CanvasComponent } from './components/rxjs/canvas/canvas.component';
import { GameComponent } from './components/rxjs/game/game.component';
import { TetrisComponent } from './components/rxjs/tetris/tetris.component';
import { CubeComponent } from './css-example/cube/cube.component';
import { Gallery3dComponent } from './css-example/gallery3d/gallery3d.component';
import { InlineBlockComponent } from './css-example/inline-block/inline-block.component';
import { RotateComponent } from './css-example/rotate/rotate.component';
import { ScreenscrollComponent } from './css-example/screenscroll/screenscroll.component';
import { SelectComponent } from './css-example/select/select.component';
import { AdminComponent } from './css/admin/admin.component';
import { CodemasterComponent } from './css/codemaster/codemaster.component';
import { CoffeeComponent } from './css/coffee/coffee.component';
import { FlexComponent } from './css/flex/flex.component';
import { PortpolioComponent } from './css/flex/portpolio/portpolio.component';
import { WebagencyComponent } from './css/flex/webagency/webagency.component';
import { AirbnbComponent } from './css/grid/airbnb/airbnb.component';
import { BasicComponent } from './css/grid/basic/basic.component';
import { FreelancerComponent } from './css/grid/freelancer/freelancer.component';
import { RealComponent } from './css/grid/real/real.component';
import { VlogComponent } from './css/grid/vlog/vlog.component';
import { MusicComponent } from './css/music/music.component';
import { NetflixComponent } from './css/netflix/netflix.component';
import { MininusComponent } from './mininus.component';
import { RackComponent } from './monitor/rack/rack.component';
import { TopologyComponent } from './monitor/topology/topology.component';
import { AuInputComponent } from './ng-advanced-library/au-input/au-input.component';
import { NgModalComponent } from './ng-advanced-library/ng-modal/ng-modal.component';
import { NgTapComponent } from './ng-advanced-library/ng-tap/ng-tap.component';
import { AddComponent } from './pages/add/add.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { ProgrssbarComponent } from './rxjs-recipe/progrssbar/progrssbar.component';
import { TestComponent } from './test/test.component';
import { AddCardComponent } from './ui/add-card/add-card.component';
import { WavyComponent } from './css-example/wavy/wavy.component';
import { DrivebusComponent } from './css-example/drivebus/drivebus.component';
import { BubblesComponent } from './css-example/bubbles/bubbles.component';
import { SolarSystemComponent } from './css-example/solar-system/solar-system.component';
import { ClockComponent } from './css-example/clock/clock.component';
import { PokeballComponent } from './css-example/pokeball/pokeball.component';
import { LightWaveComponent } from './css-example/light-wave/light-wave.component';
import { EclipseComponent } from './css-example/eclipse/eclipse.component';
import { SpritesheetComponent } from './css-example/spritesheet/spritesheet.component';

const routes: Routes = [
  {
    path: '', component: MininusComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'add', component: AddComponent },
      { path: 'detail/:city', component: DetailsComponent },
      {
        path: 'charts', children: [
          { path: 'line', component: LineComponent },
          { path: 'bar', component: BarComponent },
          { path: 'pie', component: PieComponent },
          { path: 'gauge', component: GaugeComponent },

        ],
      },
      {
        path: 'monitor', children: [
          { path: 'topology', component: TopologyComponent },
          { path: 'hw', component: RackComponent },
        ],
      },
      {
        path: 'components', children: [
          { path: 'game', component: GameComponent },
          { path: 'tetris', component: TetrisComponent },
          { path: 'canvas', component: CanvasComponent },
          { path: 'coffee', component: CoffeeComponent },
          { path: 'flex', component: FlexComponent },
          { path: 'portpolio', component: PortpolioComponent },
          { path: 'webagency', component: WebagencyComponent },
          { path: 'panel', component: MusicComponent },
          { path: 'netflix', component: NetflixComponent },
          { path: 'admin', component: AdminComponent },
          { path: 'basic', component: BasicComponent },
          { path: 'vlog', component: VlogComponent },
          { path: 'real', component: RealComponent },
          { path: 'freelancer', component: FreelancerComponent },
          { path: 'airbnb', component: AirbnbComponent },
          { path: 'codemaster', component: CodemasterComponent },
          { path: 'elementref', component: ElementrefComponent },
          { path: 'templateref', component: TemplaterefComponent },
          { path: 'viewref', component: ViewrefComponent },
          { path: 'componentref', component: ComponentrefComponent },
          { path: 'viewcomponentref', component: ViewContainerrefComponent },
          { path: 'viewchildcomponent', component: ViewChildComponent },
          { path: 'ngtemplateoutlet', component: NgtemplateoutletComponent },
          { path: 'valuepro', component: ValueproComponent },
          { path: 'factorypro', component: FactoryproComponent },
          { path: 'classpro', component: ClassproComponent },
          { path: 'lazycomponent', component: LazyMainComponent },
          { path: 'lazymodule', component: LazymoduleComponent },
          { path: 'directive', component: DirectiveComponent },
          { path: 'ngrx', component: NgrxComponent },
          { path: 'formarray', component: FormsComponent },
          { path: 'ngrx/:courseUrl', component: CourseComponent }, //resolve: { course: CourseResolver}
          { path: 'login', component: LoginComponent },
        ],
      },
      {
        path: 'cssex', children: [
          { path: 'inline', component: InlineBlockComponent },
          { path: 'select', component: SelectComponent },
          { path: 'rotate', component: RotateComponent },
          { path: 'gallery3d', component: Gallery3dComponent },
          { path: 'cube', component: CubeComponent },
          { path: 'screenscroll', component: ScreenscrollComponent },
          { path: 'wavycircle', component: WavyComponent },
          { path: 'drivebus', component: DrivebusComponent },
          { path: 'bubbles', component: BubblesComponent },
          { path: 'solarsys', component: SolarSystemComponent },
          { path: 'clock', component: ClockComponent },
          { path: 'pokeball', component: PokeballComponent },
          { path: 'lightwave', component: LightWaveComponent },
          { path: 'eclipse', component: EclipseComponent },
          { path: 'walking', component: SpritesheetComponent },
        ],
      },
      {
        path: 'ngrx', children: [
          { path: 'progressbar', component: ProgrssbarComponent },
        ],
      },
      {
        path: 'grid', children: [
          {
            path: '',
            loadChildren: () => import('./space-walk/spacewalk.module').then((m) => m.SpaceWalkModule),
          },
        ],
      },
      {
        path: 'advanced', children: [
          { path: 'auinput', component: AuInputComponent },
          { path: 'taps', component: NgTapComponent },
          { path: 'modal', component: NgModalComponent },
          { path: 'test', component: TestComponent },
        ],
      },
    ],
  },
  /* { path: 'test', component: TestComponent}, */


];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class MininusRoutingModule {

}
