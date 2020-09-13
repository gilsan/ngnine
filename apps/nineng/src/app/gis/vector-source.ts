import Map from 'ol/Map';
import VectorImageLayer from 'ol/layer/VectorImage';
import VectorSource from 'ol/source/Vector';
import { polygonStyle } from './icon.style';

export const vectorSourceLayerWitholygon = (map: Map, layer: VectorImageLayer, source: VectorSource) => {
  source = new VectorSource();
  layer = new VectorImageLayer({
    source: source,
    visible: false,
    style: polygonStyle
  });

  return layer;
}



/********
    this.mainMarketSource = new VectorSource();
    this.mainMarketLayer = new VectorImageLayer({
      source: this.mainMarketSource,
      visible: false,
      style: polygonStyle,
    });
    this.mainMarketLayer.set('title', 'MAIN_MARKET');
    this.map.addLayer(this.mainMarketLayer);
  }



 */