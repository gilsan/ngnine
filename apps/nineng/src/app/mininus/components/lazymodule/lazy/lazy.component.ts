import { Component } from '@angular/core';
import { LazyService } from './lazy.servict';

@Component({
    selector: 'app-lazy',
    templateUrl: './lazy.component.html',
    styleUrls: ['./lazy.component.scss']
})
export class LazyComponent {
   items = ['Item 1', 'Item 2', 'Item 3'];

   constructor(public service: LazyService) {}
}