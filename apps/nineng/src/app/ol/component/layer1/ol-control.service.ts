import { Injectable } from '@angular/core';

import { Attribution, defaults as defaultControls } from 'ol/control';

import Map from 'ol/Map';
import * as olControl from 'ol/control';

@Injectable()
export class OlControlService {

  attribution(map: Map) {
    const attributionControl = new Attribution({
      collapsible: true
    });
    return map.addControl(attributionControl);
  }

}