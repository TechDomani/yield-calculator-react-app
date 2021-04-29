import React, { useEffect, useState } from 'react';
import YieldMap from './YieldMap/YieldMap'
import axios from 'axios';

function RentalYield() {

    /* const [centerMap, setCenterMap] = useState<[number, number]>([51.505, -0.09]);
    const [postCode, setPostCode] = useState<string>('e112dz');

    useEffect(() => {
        axios.get("https://api.postcodes.io/postcodes/e112dz")
            .then((result) => {
                console.log(result);
                let latitude = result.data.result.latitude;
                let longitude = result.data.result.longitude;
                console.log(latitude);
                console.log(longitude);
                setCenterMap([latitude, longitude])
            })
            .catch((err) => {
                console.log(err);
            })
    }, [postCode]
    ); */


    return (
        <div className="d-flex flex-column align-items-center">
            <h1>I will show rental yield</h1>
            <YieldMap />
        </div>
    );
}

export default RentalYield;