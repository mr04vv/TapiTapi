import * as React from 'react';
import useGeoLocation from 'hooks/GeoSearch/useGeoLocation';
// import Map from './Map';
import useStyles from './styles';
import CustomMap from './Map';
import ProgressCircle from 'components/ProgressCircle';

const GeoSearch = () => {
  const position = useGeoLocation();
  const classes = useStyles();
  return (
    position.isLoading ? 
    <div className={classes.loading}>
      <ProgressCircle size="30px"/>
    </div>
    :
    position.isError ?
    <div className={classes.loading}>
      読み込みに失敗しました。更新してください。
    </div> 
    : <CustomMap
      defaultLocation={position.currentPosition && position.currentPosition}
      storeList={position.storeList}
    />
  );
};

export default GeoSearch;
