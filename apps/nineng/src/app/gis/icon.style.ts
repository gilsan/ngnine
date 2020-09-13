import { Style, Fill, Text, Icon, Stroke } from 'ol/style';
import Feature from 'ol/Feature';


export const iconMarkerStyle = new Icon({
  src: '../../../assets/geodata/marker.png',
  size: [50, 50],
  offset: [0, 0],
  opacity: 0.8,
  scale: 0.6,
  color: [10, 98, 240, 1]
});


export const pointStyle = new Style({
  image: iconMarkerStyle
});


// Style for polygons
const fillStyle = new Fill({
  color: [9, 226, 27, 1]
});

const fillStyleWithEstate = new Fill({
  color: [102, 51, 0, 1]
})

// Style for lines
const strokeStyle = new Stroke({
  color: [30, 30, 31, 1],
  width: 1.2,

})


export const polygonStyle = new Style({
  fill: fillStyle,
  stroke: strokeStyle
});

export const polygonStyleWithEstateGubun = new Style({
  fill: fillStyleWithEstate,
  stroke: strokeStyle
})




export const achaSanStyle = function (feature: Feature) {
  let geometryType = feature.getGeometry().getType();

  let nameType = feature.get('category');
  let textStyles = new Style({
    text: new Text({
      text: nameType,
      textAlign: 'right',
      offsetY: -30,
      scale: 2,
      fill: new Fill({
        color: [0, 255, 0, 1]
      })
    })
  })

  if (geometryType === 'Point') {
    feature.setStyle([pointStyle, textStyles])
  }
}