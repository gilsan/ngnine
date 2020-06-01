import { Component, Input, OnInit } from '@angular/core';
import { Relative } from '../../shared/interface/user.interface';
 
@Component({
    selector: 'app-has-relative-table',
    templateUrl: './has-relative-table.component.html',
    styleUrls: ['../../shared/css/table.scss']
})
export class HasRelativeTableComponent implements OnInit {
    @Input() relatives: Relative[];

    displayedColumns: string[] = [
        'expandIcon',
        'Relative ID',
        'Patient ID',
        'Is alive?',
        'Frequency of visites'
    ];

    constructor() {
       
    }

    ngOnInit() {
        console.log('[][][relative]', this.relatives);
    }
}



