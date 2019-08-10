import * as React from 'react';
import useManageInfo from 'hooks/Management/useManageInfo';
import OrderedMenuInterface, { OrderedItemInterface } from 'interfaces/OrderedMenuInterface';
import useStoreList from 'hooks/Store/useStoreList';
import useReactRouter from 'use-react-router';
import useStyles from './styles';

const Management = () => {
  const manageInfo = useManageInfo();
  const classes = useStyles();
  const storeList = useStoreList();
  const { history } = useReactRouter();

  return (
    <div onKeyDown={(e: any) => manageInfo.handleKeyDown(e)} role="presentation">
      {manageInfo.orderList.map((o: OrderedMenuInterface, idx: number) => (
        <div key={o.id} className={idx !== manageInfo.index ? classes.focus : classes.group}>
          <p className={classes.text}>{o.id}</p>
          <div className={classes.order}>
            {o.items.map((i: OrderedItemInterface) => (
              i.typeName === 'Drinks'
                ? (
                  <div key={i.item.id} className={classes.body}>
                    <p className={classes.item}>{`${i.item.jaName}`}</p>
                    <hr className={classes.nameHr} />
                    <p className={classes.line}>{`オプション：${i.options.length > 0 && i.options.join('/')}`}</p>
                    <p className={classes.line}>{`トッピング：${i.selectedToppings.join('/') || 'なし'}`}</p>
                    <p className={classes.line}>{`個数：${i.count}個`}</p>
                    <hr />
                  </div>
                )
                : (
                  <div className={classes.body} key={i.item.id}>
                    <p className={classes.item}>{`${i.item.jaName}`}</p>
                    <hr className={classes.nameHr} />
                    <p className={classes.line}>{`個数：${i.count}個`}</p>
                    <hr />
                  </div>
                )
            ))}
          </div>
        </div>
      ))}
      <div className={classes.wrapper}>
        {storeList && storeList.storeList.map((s: any) => (
          <div className={classes.store} onClick={() => history.push({ pathname: `/management/${s.id}` })} role="presentation">{s.storeName}</div>
        ))}
      </div>

    </div>
  );
};

export default Management;
