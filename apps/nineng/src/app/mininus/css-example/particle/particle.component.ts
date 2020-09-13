import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from './particles-config';

declare let particlesJS: any;

@Component({
  selector: 'app-particle',
  templateUrl: './particle.component.html',
  styleUrls: ['./particle.component.scss']
})
export class ParticleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    particlesJS('snow_fall', ParticlesConfig, function () { });

  }

}
