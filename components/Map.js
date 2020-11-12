import ReactMapboxGl, {ZoomControl, Marker} from "react-mapbox-gl";
import Image from "next/image";
import React from "react";

const MapBox = ReactMapboxGl({
    accessToken:
        "pk.eyJ1IjoiZWRvdWFyZC1taXN0ZXJlIiwiYSI6ImNraDk4bXYxNDEzMXgyb256aDVpajFpbmQifQ.nwfBpDtcUSgx9CFZGQ_v9g"
});
export default () => {
    return (
        <MapBox
            style="mapbox://styles/mapbox/streets-v10"
            center={[1.216038, 44.888763]}
            zoom={[17]}
            containerStyle={{
                height: "400px",
                width: "100%"
            }}
        >
            <Marker
                coordinates={[1.216038, 44.888763]}
                anchor="bottom">
                <img src={'/images/pin.svg'} width={30} height={30} alt='pin'/>
            </Marker>
            <ZoomControl/>
        </MapBox>
    )
        ;
};
