import { Component, Input, OnInit } from '@angular/core';
import { Phone } from '../../shared/interface/user.interface';

@Component({
    selector: 'app-has-phone-table',
    templateUrl: './has-phone-table.component.html',
    styleUrls: ['../../shared/css/table.scss']
})
export class HasPhoneTableComponent implements OnInit {
    @Input() phones: Phone[];

    displayedColumns: string[] = [
        'Phone ID',
        'ID of the relative',
        'Phone'
    ];

    constructor() {}

    ngOnInit() {
        console.log('[][][phone]', this.phones);
    }
}