
import { Component, OnInit } from '@angular/core';
import { ColoringService } from '../admin/services/coloring.service';
import { FirebaseApiService, IColoring } from './firebase.api';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-convert',
    templateUrl: './convert.component.html',
})
export class ConvertComponent implements OnInit {
     list: IColoring[] = [];
     dateTime: any[] = [];
     constructor(
         private service: ColoringService,
         private fb: FirebaseApiService,
     ) {}

     ngOnInit() {
         this.fb.getDateTime().subscribe((data: any) => {
          //  this.fb.addDateTime(data);
         });
     }
}
