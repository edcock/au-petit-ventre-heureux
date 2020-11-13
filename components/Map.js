import ReactMapboxGl, {Marker, ZoomControl} from "react-mapbox-gl";

import React from "react";

const MapBox = ReactMapboxGl({
    accessToken:
        "pk.eyJ1IjoiZWRvdWFyZC1taXN0ZXJlIiwiYSI6ImNraDk4bXYxNDEzMXgyb256aDVpajFpbmQifQ.nwfBpDtcUSgx9CFZGQ_v9g",
    preserveDrawingBuffer: false,
    scrollZoom: false,
    interactive: false,

});
export default () => {
    return (
        <MapBox
            style="mapbox://styles/mapbox/streets-v11"
            center={[1.216038, 44.888763]}
            zoom={[17]}
            containerStyle={{
                height: "50vh",
                width: "100%"
            }}
        >
            <ZoomControl/>
            <Marker
                coordinates={[1.216038, 44.888763]}
                anchor="bottom">
                <img src={'/images/pin.svg'} width={30} height={30} alt='pin'/>
            </Marker>
        </MapBox>
    )
        ;
};
