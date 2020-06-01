import { Component, OnInit, Inject } from '@angular/core';
import { AppConfig, APP_CONFIG, MY_APP_CONFIG } from './app.config';

@Component({
  selector: 'app-classpro',
  templateUrl: './classpro.component.html',
  styleUrls: ['./classpro.component.scss'],
  providers: [
     { provide:  APP_CONFIG, useValue: MY_APP_CONFIG}
  ]
})
export class ClassproComponent implements OnInit {
  url:string;
  port: string;
  constructor(
    @Inject(APP_CONFIG)  private appConfig: AppConfig,
  ) { }

  ngOnInit(): void {
    this.url = this.appConfig.url;
    this.port = this.appConfig.port;
    
  }

}
