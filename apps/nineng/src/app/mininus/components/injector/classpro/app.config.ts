import { InjectionToken } from '@angular/core'

export interface AppConfig {
    url: string;
    port: string;
}

export const MY_APP_CONFIG: AppConfig ={
   url: 'http://angular.io',
   port: '5000',
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');