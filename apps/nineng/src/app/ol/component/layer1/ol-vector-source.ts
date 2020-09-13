import VectorSource from 'ol/source/Vector';

import GeoJSON from 'ol/format/GeoJSON';

export const vectorSource = new VectorSource({
  url: 'assets/geodata/countries.geojson',
  format: new GeoJSON()
});