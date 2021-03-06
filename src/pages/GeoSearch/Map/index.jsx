/* eslint-disable no-console */
import * as React from 'react';
import {
  GoogleApiWrapper, Map, Marker,
} from 'google-maps-react';

const CustomMap = (props) => {
  const {
    defaultLocation, google, storeList, setIsShowModal,
  } = props;
  return (
    defaultLocation
      ? (
        <Map
          google={google}
          zoom={14}
          style={{ height: 'calc(100vh - 56px)' }}
          initialCenter={{ lat: defaultLocation.coords.latitude, lng: defaultLocation.coords.longitude }}
        >
          {storeList.map(s => (
            <Marker
              key={s.storeName}
              title={s.storeName}
              position={{ lat: s.lat, lng: s.lng }}
              onClick={() => setIsShowModal(s)}
            />
          ))}
        </Map>
      ) : null
  );
};

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_HELLO_WORLD),
  language: 'japanese',
})(CustomMap);
