import { Map, Marker, ZoomControl } from "pigeon-maps";
import { ImAirplane } from 'react-icons/im';
import React from "react";
import data from '../../exampleData/quakesSmall.json';

export default function Home() {
  const features = data.features
  const coords = [[0,0,0]]
  features.forEach( feature => {
    coords.push([feature.geometry.coordinates[0],feature.geometry.coordinates[1],feature.id])
  })
  const [center, setCenter] = React.useState([39.69960614291127, -105.08409829929842])
  const [zoom, setZoom] = React.useState(3)
  return (
    <div className="App" style={{padding: 20}}>
      <Map 
      height={'80vh'}
      width={'80vw'}
      center={[center[0],center[1], center[2]]}
      zoom={zoom} 
      onBoundsChanged={({ center, zoom }) => { 
        setCenter(center) 
        setZoom(zoom) 
      }} 
    >
      {coords && coords.map((element, index) => (
        <Marker 
        key={element[2]}
        width={10}
        anchor={[parseFloat(element[1]), parseFloat(element[0])]} 
      >
          <ImAirplane style={{color:"black"}}/>
      </Marker>
))}

      <Marker 
        width={10} // this adds error zooming out and does not control size
        anchor={[39.69960614291127, -105.08409829929842]} 
      >
          <ImAirplane style={{color:"black"}}/>
      </Marker>
      <ZoomControl />
    </Map>
    </div>
  );
}
