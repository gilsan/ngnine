import { Component, OnInit } from '@angular/core';
import { topologyData } from './topology';
import * as nx from 'next-ui';
declare let nx: any;

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-backbone',
  templateUrl: './backbone.component.html',
  styleUrls: ['./backbone.component.scss']
})
export class BackboneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.init();
  }

  init() {

    const app = new nx.ui.Application();

    const topologyConfig = {
      width: window.innerWidth,
      height: window.innerHeight,
      nodeConfig: {
        label: "model.name",
        iconType: "model.device_type",
        color: "model.color",
      },
      linkConfig: {
        linkType: "staight",
        color: "model.color"
      },
      showIcon: true,
    };


    const topology = new nx.graphic.Topology(topologyConfig);
    topology.data(topologyData);
    topology.attach(app);
    app.container(document.getElementById("topology-container"));













  }

}
