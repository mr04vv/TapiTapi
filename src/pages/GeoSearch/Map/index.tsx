/* eslint-disable no-console */
import * as React from 'react';
import {
  GoogleApiWrapper, Map, Marker, GoogleAPI,
} from 'google-maps-react';
import StoreInterface from 'interfaces/StoreInterface';

interface PropsInterface {
  google: GoogleAPI;
  defaultLocation: Position | undefined;
  loaded: boolean;
  storeList: StoreInterface[];
  setIsShowModal: (v: StoreInterface | false) => void;
}

const CustomMap = (props: PropsInterface) => {
  const {
    defaultLocation, google, storeList, setIsShowModal,
  } = props;
  return (
    defaultLocation!
      ? (
        <Map
          google={google}
          zoom={14}
          style={{ height: 'calc(100vh - 56px)' }}
          initialCenter={{ lat: defaultLocation!.coords.latitude, lng: defaultLocation!.coords.longitude }}
        >
          {storeList.map((s: StoreInterface) => (
            <Marker
              title={s.storeName}
              position={{ lat: s.lat, lng: s.lng }}
              // eslint-disable-next-line no-console
              onClick={() => setIsShowModal(s)}
            />
          ))}
        </Map>
      ) : null
  );
};

export default GoogleApiWrapper({
  apiKey: ('AIzaSyA7nrHvH38do8WHwKP-UPFedPJzUgw324Q'),
  language: 'japanese',
})(CustomMap);
