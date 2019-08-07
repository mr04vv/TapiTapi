import { useEffect, useState } from 'react';
import StoreInterface from 'interfaces/StoreInterface';
import useReactRouter from 'use-react-router';
import useStoreList from './useStoreList';

const useGetStore = () => {
  const stores = useStoreList();
  const [store, setStore] = useState<StoreInterface>();
  const { match } = useReactRouter();

  useEffect(() => {
    const { params }: any = match;
    if (stores.storeList.length > 0) {
      const s = stores.storeList.find((i: any) => i.id === Number(params.storeId));
      setStore(s);
    }
  }, [stores.storeList]);

  return store;
};
export default useGetStore;
