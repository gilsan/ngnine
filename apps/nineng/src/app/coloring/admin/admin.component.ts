import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
    selector: 'ngnine-admin',
    templateUrl: './admin.component.html',
    styleUrls:  [ './admin.component.scss'],
})
export class AdminComponent implements OnInit {
    constructor(
        public themeService: ThemeService,
    ) {}

    ngOnInit() {
        
    }
}
