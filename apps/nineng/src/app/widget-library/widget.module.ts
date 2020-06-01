import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import {AuMaskDirective} from "./directives/au-mask.directive";
import {InputRefDirective} from "./directives/input-ref.directive";
import {AuInputComponent} from "./au-input/au-input.component";
import {TabComponent} from "./tab/tab.component";
import {TabPanelComponent} from "./tab-panel/tab-panel.component";
import {ModalComponent} from "./modal/modal.component";
import {ModalOpenCloseDirective} from "./directives/modal-open-close.directive";

@NgModule({
  declarations: [
    AuMaskDirective,
    InputRefDirective,
    AuInputComponent,
    TabComponent,
    TabPanelComponent,
    ModalComponent,
    ModalOpenCloseDirective,

  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    AuMaskDirective,
    InputRefDirective,
    AuInputComponent,
    TabComponent,
    TabPanelComponent,
    ModalComponent,
    ModalOpenCloseDirective,
  ],
})
export class WidgetModule { }
