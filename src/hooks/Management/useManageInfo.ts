import { useState, useEffect, useMemo } from 'react';
import useReactRouter from 'use-react-router';
import * as firebase from 'firebase';
import 'firebase/firestore';

const useManageInfo = () => {
  const { match } = useReactRouter();
  const { params }: any = match;
  const [isError, setIsError] = useState<boolean>(false);
  const [isStoreError, setIsStoreError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [orderList, setOrderList] = useState<any[]>([]);
  const [index, setIndex] = useState<number>(0);
  const UP_KEY = 38;
  const DOWN_KEY = 40;
  const ENTER_KEY = 13;

  const finish = async (idx: number) => {
    const { id } = orderList[idx];
    const db = firebase.firestore();
    const doc = await db.collection('orderList').where('storeInfo.id', '==', Number(params.storeId)).where('id', '==', id).get();
    let docId;
    doc.forEach((d) => {
      docId = d.id;
    });
    await db.collection('orderList').doc(docId).update({ isFinished: true });
    setIndex(0);
  };


  const handleKeyDown = (e: any) => {
    if (orderList.length > 0) {
      if (e.keyCode === DOWN_KEY) {
        if (index + 1 < orderList.length) {
          setIndex(index + 1);
        }
      } else if (e.keyCode === UP_KEY) {
        if (index - 1 > -1) {
          setIndex(index - 1);
        }
      } else if (e.keyCode === ENTER_KEY) {
        finish(index);
      }
    }
  };


  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  useMemo(() => {
    const db = firebase.firestore();
    db.collection('orderList')
      .where('storeInfo.id', '==', Number(params.storeId))
      .where('isRead', '==', true)
      .where('isFinished', '==', false)
      .onSnapshot((res) => {
        const orders: any[] = [];
        res.forEach((r) => {
          orders.push(r.data());
        });
        setOrderList(orders);
      });
    return db;
  }, []);


  return {
    orderList,
    finish,
    index,
    handleKeyDown,
  };
};
export default useManageInfo;
