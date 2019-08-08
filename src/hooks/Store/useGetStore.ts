import { useEffect, useState } from 'react';
import StoreInterface from 'interfaces/StoreInterface';
import useReactRouter from 'use-react-router';
import useStoreList from './useStoreList';

const useGetStore = () => {
  const stores = useStoreList();
  const [store, setStore] = useState<StoreInterface>();
  const { match } = useReactRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const { params }: any = match;
    if (stores.storeList.length > 0) {
      const s = stores.storeList.find((i: any) => i.id === Number(params.storeId));
      setStore(s);
      setIsLoading(false);
    }
  }, [stores.storeList, match]);

  return {
    store,
    isLoading,
  };
};
export default useGetStore;
