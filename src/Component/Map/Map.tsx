import React from 'react';
import "leaflet/dist/leaflet.css";
import './Map.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export interface MapProps {
    latitude: number,
    longitude: number
}

function Map({latitude, longitude}: MapProps) {

    const position = [latitude, longitude];
    console.log(position);

    return (<MapContainer className='Map-display' 
    center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    );
}

export default Map;