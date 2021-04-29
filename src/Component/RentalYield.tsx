import React, { useEffect, useState } from 'react';
import YieldMap from './YieldMap/YieldMap'
import axios from 'axios';

function RentalYield() {

    const [position, setPosition] = useState<[number, number]>([59.91174337077401, 10.750425582038146]);
    const [postCode, setPostCode] = useState<string>('e112dz');

    const search = () => {
        axios.get("https://api.postcodes.io/postcodes/" + postCode)
        .then((result) => {
            let latitude = result.data.result.latitude;
            let longitude = result.data.result.longitude;
            setPosition([latitude, longitude])
        })
        .catch((err) => {
            console.log(err);
        })
    };

    return (
        <div className="d-flex flex-column align-items-center">
            <h1>I will show rental yield</h1>
            <div>               
              <input onChange={(e) => setPostCode(e.target.value)} placeholder="Enter postcode"></input>
              <button onClick={search}>Search</button>
            </div>
            <YieldMap latitude={position[0]} longitude={position[1]} />
        </div>
    );
}

export default RentalYield;