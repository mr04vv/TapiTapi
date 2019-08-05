import * as React from 'react';
import {
  GoogleApiWrapper, Map, Marker, GoogleAPI,
} from 'google-maps-react';

interface PropsInterface {
  google: GoogleAPI;
  defaultLocation: Position | undefined;
  loaded: boolean;
}

const CustomMap = (props: PropsInterface) => {
  const { defaultLocation, google } = props;
  return (
    defaultLocation!
      ? (
        <Map
          google={google}
          zoom={14}
          initialCenter={{ lat: defaultLocation!.coords.latitude, lng: defaultLocation!.coords.longitude }}
        >
          <Marker
            title="現在地"
          />
        </Map>
      ) : null
  );
};

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBwqfXnSEFdXJ0C92a3V4mOJbvTIEBO4GQ'),
})(CustomMap);
