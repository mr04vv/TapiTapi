import { useEffect, useState } from 'react';
import useGetStore from 'hooks/Store/useGetStore';
import useReactRouter from 'use-react-router';

const useConfirm = () => {
  const store = useGetStore();
  const [items, setItems] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const { history } = useReactRouter();

  useEffect(() => {
    if (store.store) {
      const storage = localStorage.getItem(`item${store.store.id}`);
      setItems(JSON.parse(storage!));
      setIsLoading(false);
    }
  }, [store.store]);

  const confirm = () => {
    const itemInfoEncodedBase64 = window.btoa(items);
    localStorage.removeItem(`item${store.store!.id}`);
    history.push({
      pathname: `/ordered/${itemInfoEncodedBase64}`,
    });
  };

  return {
    items,
    isLoading,
    isShowModal,
    setIsShowModal,
    confirm,
  };
};
export default useConfirm;
