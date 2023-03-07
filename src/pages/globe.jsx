import { Card, Typography } from "@mui/material";
import dynamic from 'next/dynamic';
import { ImAirplane } from 'react-icons/im';
import React from "react";
import data from '../exampleData/quakesSmall.json';
import CardContent from "@mui/material/CardContent";
import { ThemeProvider } from '@mui/material/styles';
import { THEME } from "@/constants";

export default function Home() {
  
  const features = data.features
  const ReactGlobe = dynamic(import('react-globe.gl'), { ssr: false });
  const coords = [[0,0,0]]
  features.forEach( feature => {
    coords.push([feature.geometry.coordinates[0],feature.geometry.coordinates[1],feature.geometry.coordinates[2],feature.id])
  })
  const [center, setCenter] = React.useState([39.69960614291127, -105.08409829929842])
  const [zoom, setZoom] = React.useState(3)
  return (
          <ReactGlobe />
  );
}
