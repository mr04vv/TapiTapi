import * as React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

interface TapiokaStore {
  id: number;
  lat: number;
  lng: number;
}

const TapiokaStores: Array<TapiokaStore> = [
  { id: 1, lat: 35.6889468, lng: 139.7679161 },
  { id: 2, lat: 35.691, lng: 139.77 },
];

export interface MapComponentProps {}

const MapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAr73HIS1eIkMOkWxRWXDMoUUpYk796fsI&v=3.exp&libraries=geometry,drawing,places',
    containerElement: <div style={{ height: `100vh` }} />,
    loadingElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(() => (
  // TODO: defaultCenter は、geolocation APIから取ってきた現在地にしたいよね
  <GoogleMap defaultZoom={15} defaultCenter={{ lat: 35.689299, lng: 139.77846 }}>
    {TapiokaStores.map(({ id, lat, lng }) => (
      <Marker key={id} position={{ lat, lng }} />
    ))}
  </GoogleMap>
));

export default MapComponent;
