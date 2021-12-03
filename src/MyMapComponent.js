import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) => {
    return (
        < GoogleMap key={props.key}
            defaultZoom={3}
            defaultCenter={{ lat: props.lat, lng: props.lang }}
        >

            {<Marker position={{ lat: props.lat, lng: props.lang }} />}
        </GoogleMap >
    )
}));

export default MyMapComponent;
