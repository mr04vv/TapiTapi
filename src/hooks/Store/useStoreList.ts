import { useEffect, useState } from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';
import { getStoreListSuccess } from 'reduxes/modules/stores/storeList';
import StoreInterface from 'interfaces/StoreInterface';

const useStoreList = () => {
  const storeSelector = (state: any) => state.storeList;
  const storeState = useSelector(storeSelector);
  const dispatch = useDispatch();
  const [storeList, setStoreList] = useState<StoreInterface[]>([]);

  useEffect(() => {
    (async () => {
      if (storeState.data.length !== 43) {
        const db = firebase.firestore();
        const storeRef = await db.collection('stores').doc('storeList').get();
        const stores = storeRef.data();
        dispatch(getStoreListSuccess(stores!.items));
      }
    })();
    if (storeState.data.length === 43) {
      setStoreList(storeState.data);
    }
  }, [storeState.data, dispatch]);

  return {
    storeList,
  };
};
export default useStoreList;
