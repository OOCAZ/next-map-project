import { Map, Marker, ZoomControl, GeoJson } from "pigeon-maps";
import { Card, Typography } from "@mui/material";
import { ImAirplane } from 'react-icons/im';
import React from "react";
import data from '../exampleData/quakesSmall.json';
import data2 from '../exampleData/airspaceTest.geo.json';
import CardContent from "@mui/material/CardContent";
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function Home() {
  const geoJsonLink = "https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/2_bundeslaender/4_niedrig.geo.json"
  const features = data.features
  const coords = [[0,0,0]]
  features.forEach( feature => {
    coords.push([feature.geometry.coordinates[0],feature.geometry.coordinates[1],feature.geometry.coordinates[2],feature.id])
  })
  const [center, setCenter] = React.useState([39.69960614291127, -105.08409829929842])
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const [zoom, setZoom] = React.useState(3)
  return (
    <div className="App" style={{padding: 20, justifyContent: 'center', alignItems: 'center', flex: 1, flexDirection: 'column'}}>
      <ThemeProvider theme={darkTheme}>
      <Card sx={{width:'85vw'}}>
        <CardContent>
          <Typography>
            View Airspaces and Tracks
          </Typography>
          </CardContent>
          </Card>
      <Card sx={{width:'85vw'}}>
        <CardContent>
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
          {coords.map(element => (
            <Marker 
            key={element[3]}
            width={10}
            anchor={[parseFloat(element[1]), parseFloat(element[0])]} 
          >
              <ImAirplane style={{color:"black", transform: `rotate(${parseInt(element[2])}deg)`}}/>
          </Marker>
    ))}
          <GeoJson
            data={data2}
            styleCallback={(feature, hover) =>
              hover
                ? { fill: '#93c0d099', strokeWidth: '2'}
                : { fill: '#d4e6ec99', strokeWidth: '1'}
            }
          />
          <ZoomControl />
        </Map>
    </CardContent>
      </Card>
      </ThemeProvider>
    </div>
  );
}
