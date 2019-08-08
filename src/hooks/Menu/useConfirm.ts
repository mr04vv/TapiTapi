import { useEffect, useState } from 'react';
import useGetStore from 'hooks/Store/useGetStore';
import useReactRouter from 'use-react-router';
import * as firebase from 'firebase';
import 'firebase/firestore';

const useConfirm = () => {
  const store = useGetStore();
  const [items, setItems] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isOrderLoading, setIsOrderLoading] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const { history } = useReactRouter();

  useEffect(() => {
    if (store.store) {
      const storage = localStorage.getItem(`item${store.store.id}`);
      setItems(JSON.parse(storage!));
      setIsLoading(false);
    }
  }, [store.store]);

  const confirm = async () => {
    // localStorage.removeItem(`item${store.store!.id}`);
    const db = firebase.firestore();
    setIsOrderLoading(true);
    const savedInfo = await db.collection('orderList').add({
      items, isRead: false, storeInfo: store.store, isFinished: false, storeId: store.store!.id, id: 0,
    });
    setIsOrderLoading(false);
    history.push({
      pathname: `/ordered/${savedInfo.id}`,
    });
  };

  return {
    items,
    isLoading,
    isShowModal,
    setIsShowModal,
    confirm,
    isOrderLoading,
  };
};
export default useConfirm;
