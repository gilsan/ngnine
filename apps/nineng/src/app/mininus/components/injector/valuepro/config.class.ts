import { Injectable, InjectionToken } from '@angular/core';

export class Config {
    serviceName: string;
    grade: string[] = [];
    getInfo(){}
}

export const myConfig = {
    serviceName: '회원관리 서비스',
    grade: ['운영자','평회원', '준회원'],
    getInfo: () => {
        return `
          <b>
             ${myConfig.serviceName}
           </b>는
          <b>
             ${myConfig.grade}
          </b> 등급이 있습니다.`;
    }
}

export const APP_CONFIG_TOKEN = new InjectionToken<Config>('myConfig', {providedIn:'root', factory:()=> myConfig});
 