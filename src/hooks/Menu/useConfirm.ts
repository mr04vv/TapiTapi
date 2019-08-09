import { useEffect, useState } from 'react';
import useGetStore from 'hooks/Store/useGetStore';
import useReactRouter from 'use-react-router';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { OrderedItemInterface } from 'interfaces/OrderedMenuInterface';
import useLogin from 'hooks/Login/useLogin';

const useConfirm = () => {
  const store = useGetStore();
  const [items, setItems] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isOrderLoading, setIsOrderLoading] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [selectedItemId, setSelectedItemId] = useState<string | false>(false);
  const { history, match } = useReactRouter();
  const { params }: any = match;
  const login = useLogin();

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
    if (login.userId) {
      const historyDoc = await db.collection('historyList').doc(login.userId).get();
      const historyData = historyDoc.data();
      const historyItem = historyData ? historyData!.item : [];
      const addHistoryItem = {
        items, storeName: store.store!.storeName, createdDate: new Date().toLocaleString('ja'),
      };
      const item = [...historyItem, addHistoryItem];

      await db.collection('historyList').doc(login.userId).set({
        item,
      });
    }
    history.push({
      pathname: `/ordered/${savedInfo.id}`,
    });
  };

  const confirmDelete = () => {
    const storageItemKey = `item${params.storeId}`;
    const storageItems = localStorage.getItem(storageItemKey);
    const selectedItemList = JSON.parse(storageItems!);
    const selectedItemListAfterDeleted = selectedItemList.filter((i: OrderedItemInterface) => i.id !== selectedItemId);
    localStorage.removeItem(storageItemKey);
    localStorage.setItem(storageItemKey, JSON.stringify(selectedItemListAfterDeleted));
    setItems(selectedItemListAfterDeleted);
    setSelectedItemId(false);
  };

  return {
    items,
    isLoading,
    isShowModal,
    setIsShowModal,
    confirm,
    isOrderLoading,
    deleteTools: {
      selectedItemId,
      setSelectedItemId,
      confirmDelete,
    },
  };
};
export default useConfirm;
