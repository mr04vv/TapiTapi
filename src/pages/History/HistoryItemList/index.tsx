import * as React from 'react';
import useStyles from './styles';

const HistoryItemList = ({ history }: any) => {
  const classes = useStyles();
  return (
    history.items.map((i: any) => (
      <div key={history.createdDate + i.id} className={classes.item}>
        <p className={classes.jaMenuName}>{i.jaName}</p>
        <p className={classes.enMenuName}>{i.enName}</p>
        <div className={classes.options}>
          <p className={classes.option}>{i.options.join('/')}</p>
          <p className={classes.option}>
            {i.toppings.length === 0 ? 'なし' : i.toppings.join('/')}
          </p>
          <div className={classes.inline}>
            <p className={classes.option}>{`価格： ${i.price}`}</p>
            <p className={classes.option}>{`個数： ${i.sum}`}</p>
          </div>
        </div>
      </div>
    ))
  );
};

export default HistoryItemList;
