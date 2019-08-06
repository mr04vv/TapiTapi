import * as React from 'react';
import useCommonStyles from 'common/styles';
import { Button } from '@material-ui/core';
import useStyles from './styles';
import Item from './Item';


const Confirm = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  const items = [
    {
      id: 1, enName: 'Cake', jaName: 'ソウ', price: 150, imageUrl: 'https://www.fashion-press.net/img/news/45290/LJc.jpg', options: ['ICE', 'M', '甘さ少なめ', '氷多め'], toppings: ['パール', 'トッピン２'], sum: 2,
    },
    {
      id: 2, enName: 'Cake', jaName: 'ソウ', price: 50, imageUrl: 'https://www.fashion-press.net/img/news/45290/LJc.jpg', options: ['ICE', 'M', '甘さ少なめ', '氷多め'], toppings: [], sum: 3,
    },
  ];
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <h1 className={commonClasses.commonCaption}>ご注文内容の確認</h1>
        <Item selectedItem={items} />
      </div>
      <hr className={classes.border} />
      <div className={classes.body}>
        <Button className={classes.orderButton}>＋ ご注文を追加する</Button>
        <div className={classes.inline}>
          <p className={classes.sum}>{`合計${items.reduce((s, x) => s + x.sum, 0)}点`}</p>
          <p className={classes.sumPrice}>{`${items.reduce((p, x) => p + (x.price * x.sum), 0)}円`}</p>
        </div>
      </div>
      <hr className={classes.border} />
      <Button className={classes.determineButton}>ご注文内容を確認する</Button>
    </div>
  );
};

export default Confirm;
