import * as React from 'react';
import useGeoLocation from 'hooks/GeoSearch/useGeoLocation';
import Map from './Map';
import useStyles from './styles';
import CustomMap from './Map';

const GeoSearch = () => {
  const position = useGeoLocation();
  const classes = useStyles();
  return (
    <CustomMap
      defaultLocation={position.currentPosition && position.currentPosition}
    />
  );
};

export default GeoSearch;
