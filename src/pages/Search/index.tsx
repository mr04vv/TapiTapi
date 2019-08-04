import * as React from 'react';
import GoogleMapReact from 'google-map-react';

export interface SearchPageProps {}

const SearchPage: React.SFC<SearchPageProps> = () => (
  <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyAr73HIS1eIkMOkWxRWXDMoUUpYk796fsI' }}
      defaultCenter={{
        lat: 35.2479887,
        lng: 135.7886988,
      }}
      defaultZoom={11}
    />
  </div>
);

export default SearchPage;
