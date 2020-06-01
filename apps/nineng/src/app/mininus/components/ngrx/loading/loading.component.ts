import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';

 
@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

 
  constructor(
    public loadingService: LoadingService,
  ) { }

  ngOnInit(): void {
  }

}
