import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from 'leaflet';
//import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { MutableRefObject, useEffect, useRef } from 'react';
import './YieldMap.css';

interface YieldMapProps {
   latitude: number,
   longitude: number
}

function YieldMap({latitude, longitude}: YieldMapProps) {

    console.log('Yield map props are ' + latitude + ' ' + longitude)
    
    const mapRef = useRef<L.Map | null>(null);
    const zoom : number = 15;
   // const [leafletMap

    useEffect(() => {
      const position : LatLngExpression = [latitude, longitude];
    console.log(`Map ref is ${mapRef}`);
    if (!mapRef.current){
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
      console.log(`Map ref is ${mapRef}`);
    }, [latitude, longitude]);

    return <div id="map"></div>

   /*  return (<MapContainer className="map-display" center={position} zoom={zoom} scrollWheelZoom={false}>
            <TileLayer
            attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                // Placeholder, we'll put our markers here
            }
        </MapContainer>
    ); */
}

export default YieldMap;