import TileLayer from 'ol/layer/Tile';
import { XYZ } from 'ol/source';

// vword 지도
export const vworldMap = new TileLayer({
  source: new XYZ({
    url: 'http://xdworld.vworld.kr:8080/2d/Base/service/{z}/{x}/{y}.png',
    attributions: '© VWORLD'
  }),
  visible: true,
});

export const vworldStateMap = new TileLayer({
  source: new XYZ({
    url: 'http://xdworld.vworld.kr:8080/2d/Satellite/201612/{z}/{x}/{y}.jpeg',
    attributions: '© VWORLD'
  }),
  visible: false,
});

