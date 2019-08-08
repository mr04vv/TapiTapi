import { useState, useEffect } from 'react';
import useStoreList from 'hooks/Store/useStoreList';
import StoreInterface from 'interfaces/StoreInterface';
import useReactRouter from 'use-react-router';


const useGeoLocation = () => {
  const [currentPosition, setCurrentPosition] = useState<Position>();
  const { storeList } = useStoreList();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<StoreInterface | false>(false);
  const { history } = useReactRouter();

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

  const moveMenuPageByStoreId = () => {
    if (isShowModal) {
      history.push({
        pathname: `/menus/${isShowModal.id}`,
      });
    }
  };

  return {
    currentPosition,
    storeList,
    isLoading,
    isError,
    isShowModal,
    setIsShowModal: (v: StoreInterface | false) => {
      console.debug(v);
      setIsShowModal(v);
    },
    moveMenuPageByStoreId,
  };
};

export default useGeoLocation;
