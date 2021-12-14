import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`

  body {
    overflow-x: hidden;

    &.lock {
      overflow-y: hidden;
    }
  }

  .container {
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;

    &::selection {
      color: black;
    }
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-repeat: no-repeat;
    background-position: top right;
    background-attachment: fixed;
    background-image: url("/images/main-bg.png");
    @media screen and (max-width: 768px) {
      background-attachment: initial;
    }
  }

  .button {
    padding: 25px 0;
    border-radius: 35px;
    border: none;
    background: #ff6d04;;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    text-transform: uppercase;
    color: #fff;
    align-self: center;
    outline: none;
    text-decoration: none;
    min-width: 220px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    transition: all 0.5s ease;

    &:disabled {
      background: #2a343d;
      cursor: not-allowed;
    }
  }

  .play_btn {
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
    font-size: 13px;
    color: #232323;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    text-align: center;
    outline: none;
    cursor: pointer;
  }

  .displayEnter {
    bottom: -90px;
  }
`

export const mapStyles = [{
    "elementType": "geometry", "stylers": [{
        "color": "#f5f5f5",
    },],
}, {
    "elementType": "labels.icon", "stylers": [{
        "visibility": "off",
    },],
}, {
    "elementType": "labels.text.fill", "stylers": [{
        "color": "#616161",
    },],
}, {
    "elementType": "labels.text.stroke", "stylers": [{
        "color": "#f5f5f5",
    },],
}, {
    "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{
        "color": "#a4a4a4",
    },],
}, {
    "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [{
        "color": "#bdbdbd",
    },],
}, {
    "featureType": "poi", "elementType": "geometry", "stylers": [{
        "color": "#eeeeee",
    },],
}, {
    "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{
        "color": "#757575",
    },],
}, {
    "featureType": "poi.park", "elementType": "geometry", "stylers": [{
        "color": "#e5e5e5",
    },],
}, {
    "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{
        "color": "#e5e5e5",
    },],
}, {
    "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{
        "color": "#9e9e9e",
    },],
}, {
    "featureType": "road", "elementType": "geometry", "stylers": [{
        "color": "#ffffff",
    },],
}, {
    "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [{
        "color": "#757575",
    },],
}, {
    "featureType": "road.highway", "elementType": "geometry", "stylers": [{
        "color": "#dadada",
    },],
}, {
    "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{
        "color": "#ffffff",
    },],
}, {
    "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{
        "color": "#ffffff",
    },],
}, {
    "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{
        "color": "#616161",
    },],
}, {
    "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{
        "color": "#9e9e9e",
    },],
}, {
    "featureType": "transit.line", "elementType": "geometry", "stylers": [{
        "color": "#e5e5e5",
    },],
}, {
    "featureType": "transit.station", "elementType": "geometry", "stylers": [{
        "color": "#eeeeee",
    },],
}, {
    "featureType": "water", "elementType": "geometry", "stylers": [{
        "color": "#ededed",
    },],
}, {
    "featureType": "water", "elementType": "labels.text.fill", "stylers": [{
        "color": "#bdbdbd",
    },],
},];
