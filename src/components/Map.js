// Map.js
import React from 'react';

const Map = ({ coordinates }) => {
  const mapUrl = 'https://maps.google.com/?q=${coordinates.latitude},${coordinates.longitude}';

  return (
    <div>
      <h3>Location</h3>
      <a href={mapUrl} target="_blank" rel="noopener noreferrer">
        Open in Google Maps
      </a>
    </div>
  );
};

export default Map;