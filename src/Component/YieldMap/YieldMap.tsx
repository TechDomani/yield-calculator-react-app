import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from 'leaflet';
import React, { useEffect, useRef } from 'react';
import './YieldMap.css';

interface YieldMapProps {
  latitude: number,
  longitude: number
}

function YieldMap({ latitude, longitude }: YieldMapProps) {

  console.log('Yield map props are ' + latitude + ' ' + longitude)

  const mapRef = useRef<L.Map | null>(null);
  const zoom: number = 15;

  useEffect(() => {
    const position: LatLngExpression = [latitude, longitude];
    if (!mapRef.current) {
      mapRef.current =
        L.map('map', {
          center: position,
          zoom: zoom,
          layers: [
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
              attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }),
          ]
        });
    } else {
      mapRef.current.setView(position);
    }
  }, [latitude, longitude]);

  return (<div id="map"></div>);
}

export default YieldMap;