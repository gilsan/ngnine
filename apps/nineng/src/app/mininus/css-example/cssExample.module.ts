import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Gallery3dComponent } from './gallery3d/gallery3d.component';
import { InlineBlockComponent } from './inline-block/inline-block.component';
import { SelectComponent } from './select/select.component';
import { RotateComponent } from './rotate/rotate.component';
import { ScreenscrollComponent } from './screenscroll/screenscroll.component';
import { CubeComponent } from './cube/cube.component';
import { WavyComponent } from './wavy/wavy.component';

@NgModule({
  declarations: [
    SelectComponent,
    InlineBlockComponent,
    Gallery3dComponent,
    RotateComponent,
    ScreenscrollComponent,
    CubeComponent,
    WavyComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ScreenscrollComponent,
  ]
})
export class CssExampleModule { }
