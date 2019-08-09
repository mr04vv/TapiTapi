import { useState, useEffect } from 'react';
import useStoreList from 'hooks/Store/useStoreList';
import StoreInterface from 'interfaces/StoreInterface';
import useReactRouter from 'use-react-router';

declare const google: any;

const useGeoLocation = () => {
  const [currentPosition, setCurrentPosition] = useState<Position>();
  const { storeList } = useStoreList();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<StoreInterface | false>(false);
  const { history } = useReactRouter();
  const [map, setMap] = useState<any>();
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  const [ss, setS] = useState<any>();
  const [rr, setR] = useState<any>();

  let mapRenderer: any;

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        if (position) {
          const directionsService = new google.maps.DirectionsService();
          const directionsRenderer = new google.maps.DirectionsRenderer();
          setS(directionsService);
          setR(directionsRenderer);
          setCurrentPosition(position);
          mapRenderer = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: { lat: position.coords.latitude, lng: position.coords.longitude },
          });
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
          setMap(mapRenderer);
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

  useEffect(() => {
    if (storeList) {
      storeList.forEach((s: StoreInterface) => {
        const marker = new google.maps.Marker({
          position: { lat: s.lat, lng: s.lng },
          map,
          title: 'Hello World!',
        });
        marker.addListener('click', () => {
          rr.setMap(null);
          if (map.getZoom() < 14) {
            map.setZoom(14);
          }
          map.setCenter({ lat: s.lat, lng: s.lng });
          setIsShowModal(s);
        });
        marker.setMap(map);
      });
    }
  }, [storeList, map]);

  const moveMenuPageByStoreId = () => {
    if (isShowModal) {
      history.push({
        pathname: `/menus/${isShowModal.id}`,
      });
    }
  };

  const showDirection = () => {
    if (isShowModal) {
      rr.setMap(map);
      ss.route(
        {
          origin: new google.maps.LatLng(lat, lng),
          destination: new google.maps.LatLng(isShowModal.lat, isShowModal.lng),
          travelMode: google.maps.DirectionsTravelMode.WALKING,
        },
        (response: any, status: any) => {
          if (status === 'OK') {
            rr.setDirections(response);
            setIsShowModal(false);
          } else {
            // eslint-disable-next-line no-alert
            window.alert(`Directions request failed due to ${status}`);
          }
        },
      );
    }
  };

  return {
    currentPosition,
    storeList,
    isLoading,
    isError,
    isShowModal,
    setIsShowModal: (v: StoreInterface | false) => {
      setIsShowModal(v);
    },
    moveMenuPageByStoreId,
    showDirection,
  };
};

export default useGeoLocation;
