import { ExBlocksComponent } from './ex-blocks/ex-blocks.component';
import { ExCenteringComponent } from './ex-centering/ex-centering.component';
import { ExChessboardComponent } from './ex-chessboard/ex-chessboard.component';
import { ExDebuggingComponent } from './ex-debugging/ex-debugging.component';
import { ExFormsComponent } from './ex-forms/ex-forms.component';
import { ExFullViewportComponent } from './ex-full-viewport/ex-full-viewport.component';
import { ExImageGalleryComponent } from './ex-image-gallery/ex-image-gallery.component';
import { ExMediaObjectsComponent } from './ex-media-objects/ex-media-objects.component';
import { ExOverlapComponent } from './ex-overlap/ex-overlap.component';
import { ExPlayCardsComponent } from './ex-play-cards/ex-play-cards.component';
import { ExSpanningComponent } from './ex-spanning/ex-spanning.component';
import { ExTransformComponent } from './ex-transform/ex-transform.component';
import { ExVideoViewerComponent } from './ex-video-viewer/ex-video-viewer.component';

export const exams = [
  { path: 'ex-centering', component: ExCenteringComponent },
  { path: 'ex-blocks', component: ExBlocksComponent },
  { path: 'ex-debugging', component: ExDebuggingComponent },
  { path: 'ex-image-gallery', component: ExImageGalleryComponent },
  { path: 'ex-playing-cards', component: ExPlayCardsComponent },
  { path: 'ex-spanning', component: ExSpanningComponent },
  { path: 'ex-overlap', component: ExOverlapComponent },
  { path: 'ex-forms', component: ExFormsComponent },
  { path: 'ex-media-objects', component: ExMediaObjectsComponent },
  { path: 'ex-chessboard', component: ExChessboardComponent },
  { path: 'ex-transform', component: ExTransformComponent },
  { path: 'ex-full-viewport', component: ExFullViewportComponent },
  { path: 'ex-video-viewer', component: ExVideoViewerComponent },
];
