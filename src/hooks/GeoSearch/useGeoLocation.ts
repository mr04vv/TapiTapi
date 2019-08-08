import { useState, useEffect } from 'react';
import useStoreList from 'hooks/Store/useStoreList';
import StoreInterface from 'interfaces/StoreInterface';

// import { positions } from '@material-ui/system';

const useGeoLocation = () => {
  const [currentPosition, setCurrentPosition] = useState<Position>();
  const storeList: StoreInterface[] = useStoreList().storeList;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => {
          if (position) {
            setCurrentPosition(position);
            setIsLoading(false)
          }
        },
        error => {
          setIsLoading(false)
          setIsError(true)
        },
        {timeout:10000}
      );
  }, []);

  return {
    currentPosition,
    storeList,
    isLoading,
    isError,
  };
};

export default useGeoLocation;
