import * as React from 'react';
import HistoryInterface, { HistoryItemInterface } from 'interfaces/HistoryInterface';
import useStyles from './styles';

interface PropsInterface {
  his: HistoryInterface;
}

const HistoryItemList = ({ his }:PropsInterface) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {
        his.items.map((i: HistoryItemInterface) => (
          <div key={his.createdDate + i.id} className={classes.item}>
            <p className={classes.jaMenuName}>{i.item.jaName}</p>
            <p className={classes.enMenuName}>{i.item.enName}</p>
            <div className={classes.options}>
              <p className={classes.option}>{i.options.join('/')}</p>
              <p className={classes.option}>
                {i.selectedToppings.length === 0 ? 'なし' : i.selectedToppings.join('/')}
              </p>
              <div className={classes.inline}>
                <p className={classes.option}>{`価格： ${i.ammount / i.count}`}</p>
                <p className={classes.option}>{`個数： ${i.count}`}</p>
              </div>
            </div>
          </div>
        ))
      }
    </React.Fragment>
  );
};

export default HistoryItemList;
