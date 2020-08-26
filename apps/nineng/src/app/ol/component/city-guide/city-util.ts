import Feature from 'ol/Feature';
import { Style, Circle, Fill, Stroke, Text } from 'ol/style';


export function ausCitiesStyle(feature: Feature) {
  let cityID = feature.get('ID');
  let cityIDString = cityID.toString();

  const styles = [
    new Style({
      image: new Circle({
        fill: new Fill({
          color: [77, 219, 105, 0.6]
        }),
        radius: 12,
        stroke: new Stroke({
          color: [6, 125, 34, 1],
          width: 2
        })
      }),
      text: new Text({
        text: cityIDString,
        scale: 1.5,
        fill: new Fill({
          color: [232, 26, 26, 1]
        }),
        stroke: new Stroke({
          color: [232, 26, 26, 1],
          width: 0.3
        })
      }),
    })
  ];
  return styles;
}

export function changeCitiesLayerColor(feature: Feature) {
  let cityID = feature.get('ID');
  let cityIDString = cityID.toString();

  const styles = [
    new Style({
      image: new Circle({
        fill: new Fill({
          color: [247, 26, 10, 0.5]
        }),
        radius: 12,
        stroke: new Stroke({
          color: [6, 125, 34, 1],
          width: 2
        })
      }),
      text: new Text({
        text: cityIDString,
        scale: 1.5,
        fill: new Fill({
          color: [87, 9, 9, 1]
        }),
        stroke: new Stroke({
          color: [87, 9, 9, 1],
          width: 0.5
        })
      }),
    })
  ];
  return styles;
}

