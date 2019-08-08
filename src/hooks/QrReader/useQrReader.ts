import { useState } from 'react';
import useReactRouter from 'use-react-router';
import * as firebase from 'firebase';
import 'firebase/firestore';

const useQrReader = () => {
  const { match } = useReactRouter();
  const { params }: any = match;
  const [isError, setIsError] = useState<boolean>(false);
  const [isStoreError, setIsStoreError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchItemInfo = async (id: string | null) => {
    if (id === null || isLoading) {
      return;
    }
    setIsLoading(true);
    const db = firebase.firestore();
    const res = await db.collection('orderList').doc(id).get();
    if (res.data()) {
      const info = res.data();
      if (Number(params.storeId) !== info!.storeInfo.id) {
        setIsStoreError(true);
        setTimeout(() => {
          setIsStoreError(false);
        }, 2000);
        setIsLoading(false);
        return;
      }
      if (info!.isRead || info!.isFinish) {
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 2000);
        setIsLoading(false);
        return;
      }
      const increment = firebase.firestore.FieldValue.increment(1);
      const orderCountByStore = await db.collection('orderCount').doc(info!.storeId.toString());
      await orderCountByStore.update({ count: increment });
      const count = await orderCountByStore.get();

      // Update read count
      await db.collection('orderList').doc(id).update({ isRead: true, id: count.data()!.count });
      setIsLoading(false);
    } else {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 2000);
      setIsLoading(false);
    }
  };

  const readError = () => {
    setIsError(true);
    setTimeout(() => {
      setIsError(false);
    }, 2000);
  };

  return {
    fetchItemInfo,
    isError,
    isStoreError,
    isLoading,
    readError,
  };
};
export default useQrReader;
