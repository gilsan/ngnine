import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { LazyService } from './lazy.servict';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [ LazyComponent],
    imports: [
        CommonModule
    ],
    providers: [
        LazyService
    ],
    exports: [
        LazyComponent
    ]
})
export class LazyModule {}