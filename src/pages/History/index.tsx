import * as React from 'react';
import useCommonStyles from 'common/styles';
import useScrollTop from 'hooks/ScrollTop/useScrollTop';
import useStyles from './styles';
import HistoryItemList from './HistoryItemList';

const History = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  useScrollTop();

  const histories = [
    {
      storeName: 'Gongcha 東京駅店',
      createdDate: '2019/08.10',
      items: [
        {
          id: 1, enName: 'Cake', jaName: 'ソウ', price: 150, imageUrl: 'https://www.fashion-press.net/img/news/45290/LJc.jpg', options: ['ICE', 'M', '甘さ少なめ', '氷多め'], toppings: ['パール', 'トッピン２'], sum: 2,
        },
        {
          id: 2, enName: 'Cake', jaName: 'ソウ', price: 50, imageUrl: 'https://www.fashion-press.net/img/news/45290/LJc.jpg', options: ['ICE', 'M', '甘さ少なめ', '氷多め'], toppings: [], sum: 3,
        },
      ],
    },
    {
      storeName: 'Gongcha 東京駅店',
      createdDate: '2019/08.10',
      items: [
        {
          id: 1, enName: 'Tapi', jaName: 'タピ', price: 250, imageUrl: 'https://www.fashion-press.net/img/news/45290/LJc.jpg', options: ['ICE', 'M', '甘さ少なめ', '氷多め'], toppings: ['パール', 'トッピン２'], sum: 2,
        },
        {
          id: 2, enName: 'Cake', jaName: 'ソウ', price: 50, imageUrl: 'https://www.fashion-press.net/img/news/45290/LJc.jpg', options: ['ICE', 'M', '甘さ少なめ', '氷多め'], toppings: [], sum: 3,
        },
      ],
    },
  ];

  return (
    <div className={classes.bodyWrapper}>
      <h1 className={commonClasses.caption}>購入履歴</h1>
      {histories.map((history: any) => (
        <div className={classes.contentWrapper}>
          <div className={classes.inline}>
            <p className={classes.storeName}>{history.storeName}</p>
            <p className={classes.time}>{history.createdDate}</p>
          </div>
          <h1 className={classes.caption}>注文内容</h1>
          <HistoryItemList items={history.items} />
          <div className={classes.inline}>
            <p className={classes.sum}>{`合計${history.items.reduce((s: any, x: any) => s + x.sum, 0)}点`}</p>
            <p className={classes.sumPrice}>{`${history.items.reduce((p: any, x: any) => p + (x.price * x.sum), 0)}円`}</p>
          </div>
          <hr className={classes.border} />
        </div>
      ))}
    </div>
  );
};

export default History;
