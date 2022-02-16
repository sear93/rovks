import React from 'react';
import GoogleMapReact from "google-map-react";
import {mapStyles} from "../styled/global";

const Map = () => {

    return (
        <div className="map-container">
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyDd260Dk_epyCxeONYlz2CbxysTuDv1jPI'}}
                defaultCenter={{lat: 48.9238968, lng: 24.7210028}}
                defaultZoom={15}
                options={{
                    disableDefaultUI: true,
                    styles: mapStyles
                }}
                yesIWantToUseGoogleMapApiInternals
            >
            </GoogleMapReact>
        </div>
    );
};

export default Map;
