import { Component, Inject, OnInit } from '@angular/core';
import { Config,APP_CONFIG_TOKEN, myConfig } from './config.class'

 

@Component({
  selector: 'app-valuepro',
  templateUrl: './valuepro.component.html',
  styleUrls: ['./valuepro.component.scss'],
  providers: [ 
     { provide: APP_CONFIG_TOKEN, useValue: myConfig }
  ]
})
export class ValueproComponent implements OnInit {

  constructor(
     @Inject(APP_CONFIG_TOKEN)  public config: Config,
   
  ) { }

  ngOnInit(): void {
  }

}
