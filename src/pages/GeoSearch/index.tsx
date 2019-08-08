/* eslint-disable no-nested-ternary */
import * as React from 'react';
import useGeoLocation from 'hooks/GeoSearch/useGeoLocation';
import ProgressCircle from 'components/ProgressCircle';
import useStyles from './styles';
import CustomMap from './Map';

const GeoSearch = () => {
  const position = useGeoLocation();
  const classes = useStyles();
  return (
    <React.Fragment>
      {position.isLoading && (
      <div className={classes.loading}>
        <ProgressCircle size="30px" />
      </div>
      )}
      {position.isError && (
      <div className={classes.loading}>
      読み込みに失敗しました。更新してください。
      </div>
      )}
      {!position.isError && !position.isLoading && (
        <CustomMap
          defaultLocation={position.currentPosition && position.currentPosition}
          storeList={position.storeList}
        />
      )}
    </React.Fragment>


  );
};

export default GeoSearch;
