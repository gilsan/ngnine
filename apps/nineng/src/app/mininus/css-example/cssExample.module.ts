import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Gallery3dComponent } from './gallery3d/gallery3d.component';
import { InlineBlockComponent } from './inline-block/inline-block.component';
import { SelectComponent } from './select/select.component';
import { RotateComponent } from './rotate/rotate.component';
import { ScreenscrollComponent } from './screenscroll/screenscroll.component';
import { CubeComponent } from './cube/cube.component';
import { WavyComponent } from './wavy/wavy.component';
import { DrivebusComponent } from './drivebus/drivebus.component';
import { BubblesComponent } from './bubbles/bubbles.component';
import { BubbleDirective } from './bubbles/bubble.directive';
import { SolarComponent } from './solar/solar.component';
import { SolarSystemComponent } from './solar-system/solar-system.component';
import { ClockComponent } from './clock/clock.component';
import { PokeballComponent } from './pokeball/pokeball.component';
import { LightWaveComponent } from './light-wave/light-wave.component';
import { HttpClientModule } from '@angular/common/http';
import { EclipseComponent } from './eclipse/eclipse.component';
import { SpritesheetComponent } from './spritesheet/spritesheet.component';

@NgModule({
  declarations: [
    SelectComponent,
    InlineBlockComponent,
    Gallery3dComponent,
    RotateComponent,
    ScreenscrollComponent,
    CubeComponent,
    WavyComponent,
    DrivebusComponent,
    BubblesComponent,

    BubbleDirective,

    SolarComponent,

    SolarSystemComponent,

    ClockComponent,

    PokeballComponent,

    LightWaveComponent,

    EclipseComponent,

    SpritesheetComponent,

  ],
  imports: [

    CommonModule,
    HttpClientModule,
  ],
  exports: [
    ScreenscrollComponent,
  ]

})
export class CssExampleModule { }
