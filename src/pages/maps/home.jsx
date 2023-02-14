import { Map, Marker } from "pigeon-maps"
import { ImAirplane } from 'react-icons/im';
import React from "react"
import data from '../../exampleData/quakes.json'

export default function Home() {
  console.log(data)
  const features = data.features
  console.log(features)
  const coords = [[0,0]]
  features.forEach( feature => {
    coords.push([feature.geometry.coordinates[0],feature.geometry.coordinates[1]])
  })
  console.log(coords)
  const [center, setCenter] = React.useState([39.69960614291127, -105.08409829929842])
  const [zoom, setZoom] = React.useState(3)
  return (
    <div className="App" style={{padding: 20}}>
      <Map 
      height={300}
      width={300}
      center={[center[0],center[1]]}
      zoom={zoom} 
      onBoundsChanged={({ center, zoom }) => { 
        setCenter(center) 
        setZoom(zoom) 
      }} 
    >{coords.map(component => (
    <React.Fragment key={coords[0]}>
        <Marker 
        width={50}
        anchor={[coords[1], coords[0]]} 
      >
          <ImAirplane />
      </Marker>
    </React.Fragment>
))}

      <Marker 
        width={50}
        anchor={[39.69960614291127, -105.08409829929842]} 
      >
          <ImAirplane />
      </Marker>
    </Map>
    </div>
  );
}
