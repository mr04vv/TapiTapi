import { useEffect, useState } from 'react';
import useReactRouter from 'use-react-router';
import * as firebase from 'firebase';
import 'firebase/firestore';

const useOrderedItem = () => {
  const { history } = useReactRouter();
  const { match } = useReactRouter();
  const { params }: any = match;
  const [infoId, setInfoId] = useState<string>();

  useEffect(() => {
    setInfoId(params.item);
  }, [params.item]);

  const db = firebase.firestore();
  db.collection('orderList').doc(params.item)
    .onSnapshot((doc) => {
      const data = doc.data();
      if (data!.isRead) {
        history.push({
          pathname: `/paid/${data!.id}`,
        });
      }
    });
  return {
    infoId,
  };
};
export default useOrderedItem;
