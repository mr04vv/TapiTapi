import { useState, useEffect } from 'react';
import useStoreList from 'hooks/Store/useStoreList';

const useGeoLocation = () => {
  const [currentPosition, setCurrentPosition] = useState<Position>();
  const { storeList } = useStoreList();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        if (position) {
          setCurrentPosition(position);
          setIsLoading(false);
        }
      },
      () => {
        setIsLoading(false);
        setIsError(true);
      },
      { timeout: 10000 },
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
