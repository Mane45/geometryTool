import React from 'react';
import { Scene } from '@esri/react-arcgis';
import { SketchLayer } from './SketchLayer';
import GeometryTools from './GeometryTool';

export const MapContainer = () => (
  <Scene
    mapProperties={{ basemap: 'satellite' }}
    viewProperties={{
      center: [54, 24],
      zoom: 3,
    }}
  >
    <SketchLayer />
  </Scene>
)