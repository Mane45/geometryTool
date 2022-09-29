import React from 'react';
import ReactDOM from 'react-dom';

import { MapContainer } from './MapContainer';

ReactDOM.render(
  <div style={{ width: '100vw', height: '100vh' }}>
    <MapContainer />
  </div>,
  document.getElementById('app')
);
