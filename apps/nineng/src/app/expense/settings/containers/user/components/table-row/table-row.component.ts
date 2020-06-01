import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core'; 
import { Relative, User, Phone } from './../../shared/interface/user.interface';
import { expandableTableRowanimation } from '../../shared/animations/expandable-table-row.animation';
 
@Component({
  selector: 'app-tablerow',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss', '../../shared/css/table.scss'],
  animations: [expandableTableRowanimation]
})
export class TableRowComponent implements OnInit {

    @Input() dataSource: User[] | Relative[] | Phone[];
    @Input() displayedColumns: string[];
    @Input() title: string;
    @Input() referenceId: string;
    @Input() iconKeyReference: string;
    @Input() renderTemplate: string;

    @Output() deleteUser: EventEmitter<number> = new EventEmitter<number>();
    expandedId: string = '';
 
    constructor() {}
 
    ngOnInit() { }

    toggleExpandableSymbol(id: string) {
        this.expandedId = this.expandedId === id ? '' : id;
    }

    displayData(val: string) {
      console.log('[][][table row]', val);
    }

     

}