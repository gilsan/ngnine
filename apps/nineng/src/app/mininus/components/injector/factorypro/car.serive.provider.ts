import { CarService, Engine, Speedmeter } from './car.service';

import { InjectionToken } from '@angular/core';

let carServiceFactory = (speedmeter: Speedmeter, engine: Engine)=>{
    speedmeter.speed = 100;
    speedmeter.maxSpeed = 200;
    engine.name = '은하철도999';
    return new CarService(speedmeter, engine);
}

export const Prefered_Car = new InjectionToken<CarService>('course name');

export let FactoryProvider =   {
    provide: CarService,
    useFactory: carServiceFactory,
    deps: [Speedmeter, Engine]
  }