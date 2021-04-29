import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React from 'react';
import './YieldMap.css';

interface YieldMapProps {
   latitude: number,
   longitude: number
}

function YieldMap({latitude, longitude}: YieldMapProps) {

    //const position : LatLngExpression = [59.91174337077401, 10.750425582038146];
    const position : LatLngExpression = [latitude, longitude];
    const zoom : number = 15;

    return (<MapContainer className="map-display" center={position} zoom={zoom} scrollWheelZoom={false}>
            <TileLayer
            attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                // Placeholder, we'll put our markers here
            }
        </MapContainer>
    );
}

export default YieldMap;