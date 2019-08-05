import { useState, useEffect } from 'react';
// import { positions } from '@material-ui/system';

const useGeoLocation = () => {
  const [currentPosition, setCurrentPosition] = useState<Position>();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (position) {
            console.debug(position);
            setCurrentPosition(position);
          }
        },
        error => console.error(error),
      );
    }
  }, []);

  return {
    currentPosition,
  };
};

export default useGeoLocation;
